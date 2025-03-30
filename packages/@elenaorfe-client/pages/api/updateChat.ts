import { NextApiRequest, NextApiResponse } from 'next';
import { getEnvVars } from '../../config/environment';
import { Message, Run, Thread } from '../../types/chatBot';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
): Promise<void> {
	if (req.method === 'POST') {
		const { chatbotUrl } = getEnvVars();
		const { content, threadID, company } = req.body;

		try {
			const response = sendQuestion(chatbotUrl, content, threadID, company);
			const data = await response;

			res.status(200).json(data);
		} catch (error) {
			res.status(500).json({ message: 'Error updating the chat' });
		}
	} else {
		res.status(405).json({ error: 'Method Not Allowed' });
	}
}

export const sendQuestion = async (
	chatbotUrl: string,
	content: string,
	threadID: string,
	company: string | null,
): Promise<Message[] | undefined> => {
	await addMessage(chatbotUrl, content, threadID);
	const thread = await runThread(chatbotUrl, threadID, company);
	if (thread !== undefined) {
		await getRunSteps(chatbotUrl, threadID, thread.id);
		let run = await getRunStatus(chatbotUrl, threadID, thread.id);
		while (run?.status !== 'completed' && run?.status !== 'failed') {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			run = await getRunStatus(chatbotUrl, threadID, thread.id);
		}
		const messages = await getMessages(chatbotUrl, threadID);
		if (messages !== undefined) {
			await getRuns(chatbotUrl, threadID);
			return messages.data;
		}
	}
};

const addMessage = async (
	chatbotUrl: string,
	content: string,
	threadID: string,
): Promise<void> => {
	try {
		const response = await fetch(`${chatbotUrl}/thread/${threadID}/messages`, {
			method: 'POST',
			body: JSON.stringify({
				content,
			}),
		});

		if (!response.ok) {
			throw response as unknown;
		}

		return await response.json();
	} catch (error) {
		console.log('in the catch');
		handleError(error);
	}
};

const runThread = async (
	chatbotUrl: string,
	threadID: string,
	company: string | null,
): Promise<Thread | undefined> => {
	try {
		const response = await fetch(`${chatbotUrl}/thread/${threadID}/runs`, {
			method: 'POST',
			body: JSON.stringify({
				company,
			}),
		});

		if (!response.ok) {
			throw response as unknown;
		}

		return await response.json();
	} catch (error) {
		handleError(error);
	}
};

const getRunSteps = async (
	chatbotUrl: string,
	threadID: string,
	runID: string,
): Promise<void> => {
	try {
		const response = await fetch(
			`${chatbotUrl}/thread/${threadID}/runs/${runID}/steps`,
			{ method: 'GET' },
		);

		if (!response.ok) {
			throw response as unknown;
		}

		return await response.json();
	} catch (error) {
		handleError(error);
	}
};

const getRunStatus = async (
	chatbotUrl: string,
	threadID: string,
	runID: string,
): Promise<Run | undefined> => {
	try {
		const response = await fetch(
			`${chatbotUrl}/thread/${threadID}/runs/${runID}`,
			{ method: 'GET' },
		);

		if (!response.ok) {
			throw response as unknown;
		}

		return await response.json();
	} catch (error) {
		handleError(error);
	}
};

const getMessages = async (
	chatbotUrl: string,
	threadID: string,
): Promise<{ data: Message[] } | undefined> => {
	try {
		const response = await fetch(`${chatbotUrl}/thread/${threadID}/messages`, {
			method: 'GET',
		});

		if (!response.ok) {
			throw response as unknown;
		}

		return await response.json();
	} catch (error) {
		handleError(error);
	}
};

const getRuns = async (chatbotUrl: string, threadID: string): Promise<void> => {
	try {
		const response = await fetch(`${chatbotUrl}/thread/${threadID}/runs`, {
			method: 'GET',
		});

		if (!response.ok) {
			throw response as unknown;
		}

		return await response.json();
	} catch (error) {
		handleError(error);
	}
};

const handleError = (error: any): void => {
	if (error.status === 429) {
		throw Error('tooManyRequest');
	}

	throw new Error('generic', {
		cause: JSON.stringify(error),
	});
};
