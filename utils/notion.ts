import { Message, Thread } from '../types/chatBot';

const BASE_URL = `${process.env.NEXT_PUBLIC_CHATBOT_URL}/notion`;

export const createThreadNotion = async (thread: Thread) => {
	try {
		const response = await fetch(`${BASE_URL}/thread`, {
			method: 'POST',
			body: JSON.stringify({
				thread,
			}),
		});

		if (!response.ok) {
			throw response;
		}

		return await response.json();
	} catch (error) {
		throw error;
	}
};

export const createMessagesNotion = async (
	messages: { data: Message[] },
	threadUid?: string
) => {
	try {
		await messages.data.map((message: Message) => {
			createMessageNotion(message, threadUid);
		});
	} catch (error) {
		throw error;
	}
};

export const createMessageNotion = async (
	message: Message,
	threadUid?: string
) => {
	try {
		const response = await fetch(`${BASE_URL}/message`, {
			method: 'POST',
			body: JSON.stringify({
				message: {
					...message,
					threadUid,
				},
			}),
		});

		if (!response.ok) {
			throw response;
		}

		return await response.json();
	} catch (error) {
		throw error;
	}
};

export const getMessageByProviderId = async (messageId: string) => {
	try {
		const response = await fetch(`${BASE_URL}/message/${messageId}`);

		if (!response.ok) {
			throw response;
		}

		return await response.json();
	} catch (error) {
		throw error;
	}
};
