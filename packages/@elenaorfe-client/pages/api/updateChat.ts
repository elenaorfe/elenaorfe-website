import { NextApiRequest, NextApiResponse } from 'next';
import { Message, Run, Thread } from '../../types/chatBot';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (!process.env.NEXT_PUBLIC_CHATBOT_URL) {
		return res.status(400).end('Url is not defined');
	}

	if (req.method === 'POST') {
		const { content, threadID, company } = req.body;

		try {
			const response = sendQuestion(content, threadID, company);
			const data = await response;

			res.status(200).json(data);
		} catch (error) {
			res.status(500).json({ message: 'Error updating the chat' });
		}
	} else {
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}

export const sendQuestion = async (
	content: string,
	threadID: string,
	company: string | null,
): Promise<Message[] | undefined> => {
	await addMessage(content, threadID);
	const thread = await runThread(threadID, company);
	if (thread !== undefined) {
		await getRunSteps(threadID, thread.id);
		let run = await getRunStatus(threadID, thread.id);
		while (run?.status !== 'completed' && run?.status !== 'failed') {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			run = await getRunStatus(threadID, thread.id);
		}
		const messages = await getMessages(threadID);
		if (messages !== undefined) {
			await getRuns(threadID);
			return messages.data;
		}
	}
};

export const addMessage = async (
	content: string,
	threadID: string,
): Promise<void> => {
	try {
		const response = await fetch(
			process.env.NEXT_PUBLIC_CHATBOT_URL + `/thread/${threadID}/messages`,
			{
				method: 'POST',
				body: JSON.stringify({
					content,
				}),
			},
		);

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
	threadID: string,
	company: string | null,
): Promise<Thread | undefined> => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_CHATBOT_URL}/thread/${threadID}/runs`,
			{
				method: 'POST',
				body: JSON.stringify({
					company,
				}),
			},
		);

		if (!response.ok) {
			throw response as unknown;
		}

		return await response.json();
	} catch (error) {
		handleError(error);
	}
};

const getRunSteps = async (threadID: string, runID: string): Promise<void> => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_CHATBOT_URL}/thread/${threadID}/runs/${runID}/steps`,
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
	threadID: string,
	runID: string,
): Promise<Run | undefined> => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_CHATBOT_URL}/thread/${threadID}/runs/${runID}`,
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
	threadID: string,
): Promise<{ data: Message[] } | undefined> => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_CHATBOT_URL}/thread/${threadID}/messages`,
			{
				method: 'GET',
			},
		);

		if (!response.ok) {
			throw response as unknown;
		}

		return await response.json();
	} catch (error) {
		handleError(error);
	}
};

const getRuns = async (threadID: string): Promise<void> => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_CHATBOT_URL}/thread/${threadID}/runs`,
			{
				method: 'GET',
			},
		);

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
