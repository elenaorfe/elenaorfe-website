import { Message, Run, Thread } from '../types/chatBot';

const BASE_URL = `${process.env.NEXT_PUBLIC_CHATBOT_URL ?? ''}`;

export const createThread = async (): Promise<Thread | undefined> => {
	try {
		const response = await fetch(BASE_URL + '/thread', { method: 'POST' });

		if (!response.ok) {
			handleError(response);
		}

		return await response.json();
	} catch (error) {
		handleError(error);
	}
};

export const sendQuestion = async (
	content: string,
	threadID: string
): Promise<Message[] | undefined> => {
	await addMessage(content, threadID);
	const thread = await runThread(threadID);
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
	threadID: string
): Promise<void> => {
	try {
		const response = await fetch(BASE_URL + `/thread/${threadID}/messages`, {
			method: 'POST',
			body: JSON.stringify({
				content,
			}),
		});

		if (!response.ok) {
			handleError(response);
		}

		return await response.json();
	} catch (error) {
		handleError(error);
	}
};

const runThread = async (threadID: string): Promise<Thread | undefined> => {
	try {
		const response = await fetch(`${BASE_URL}/thread/${threadID}/runs`, {
			method: 'POST',
		});

		if (!response.ok) {
			handleError(response);
		}

		return await response.json();
	} catch (error) {
		handleError(error);
	}
};

const getRunSteps = async (threadID: string, runID: string): Promise<void> => {
	try {
		const response = await fetch(
			`${BASE_URL}/thread/${threadID}/runs/${runID}/steps`,
			{ method: 'GET' }
		);

		if (!response.ok) {
			handleError(response);
		}

		return await response.json();
	} catch (error) {
		handleError(error);
	}
};

const getRunStatus = async (
	threadID: string,
	runID: string
): Promise<Run | undefined> => {
	try {
		const response = await fetch(
			`${BASE_URL}/thread/${threadID}/runs/${runID}`,
			{ method: 'GET' }
		);

		if (!response.ok) {
			handleError(response);
		}

		return await response.json();
	} catch (error) {
		handleError(error);
	}
};

const getMessages = async (
	threadID: string
): Promise<{ data: Message[] } | undefined> => {
	try {
		const response = await fetch(`${BASE_URL}/thread/${threadID}/messages`, {
			method: 'GET',
		});

		if (!response.ok) {
			handleError(response);
		}

		return await response.json();
	} catch (error) {
		handleError(error);
	}
};

const getRuns = async (threadID: string): Promise<void> => {
	try {
		const response = await fetch(`${BASE_URL}/thread/${threadID}/runs`, {
			method: 'GET',
		});

		if (!response.ok) {
			handleError(response);
		}

		return await response.json();
	} catch (error) {
		handleError(error);
	}
};

const handleError = (error: any): void => {
	if (error.status === 429) {
		throw Error(
			'Sorry, you`ve reached the maximum number of requests allowed per minute. Please wait a moment and try again.'
		);
	}

	throw new Error(`Error: ${JSON.stringify(error)}`);
};