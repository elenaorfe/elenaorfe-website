export const getEnvVars = () => {
	const chatbotUrl = process.env.NEXT_PUBLIC_CHATBOT_URL;

	if (!chatbotUrl || chatbotUrl.trim() === '') {
		throw new Error('NEXT_PUBLIC_CHATBOT_URL is not defined or is empty');
	}

	const contactUrl = process.env.NEXT_PUBLIC_CONTACT_URL;

	if (!contactUrl || contactUrl.trim() === '') {
		throw new Error('NEXT_PUBLIC_CONTACT_URL is not defined or is empty');
	}

	return {
		chatbotUrl,
		contactUrl,
	};
};
