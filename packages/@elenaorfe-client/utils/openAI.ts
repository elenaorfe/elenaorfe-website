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
		const response = await fetch(BASE_URL + `/thread/${threadID}/messages`, {
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
		handleError(error);
	}
};

const runThread = async (
	threadID: string,
	company: string | null,
): Promise<Thread | undefined> => {
	// TODO
	try {
		const response = await fetch(`${BASE_URL}/thread/${threadID}/runs`, {
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

const getRunSteps = async (threadID: string, runID: string): Promise<void> => {
	try {
		const response = await fetch(
			`${BASE_URL}/thread/${threadID}/runs/${runID}/steps`,
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
			`${BASE_URL}/thread/${threadID}/runs/${runID}`,
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
		const response = await fetch(`${BASE_URL}/thread/${threadID}/messages`, {
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

const getRuns = async (threadID: string): Promise<void> => {
	try {
		const response = await fetch(`${BASE_URL}/thread/${threadID}/runs`, {
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

export const removeSourceReferences = (text: string): string => {
	return text.replace(/\s*【.*?】/g, '');
};

export const getCoverLetterCompany = (pathname: string): string | null => {
	const match = pathname.match(/\/cover-letters\/(.*)/);
	// Split the string by hyphen and capitalize each word
	const words: string[] | null = match
		? match[1]
				.split('-')
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		: null;
	// Join the capitalized words with a space between them
	return words !== null ? words.join(' ') : null;
};

export const replaceCompanyPlaceholder = (
	company: string,
	text: string,
): string => {
	return text.replace(/{{companyName}}/g, company);
};
