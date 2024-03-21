import { handleError, headers } from './common';

export const createThreadOpenAI = async (openai: any) => {
	try {
		const emptyThread = await openai.beta.threads.create();

		return new Response(JSON.stringify(emptyThread), {
			headers,
		});
	} catch (error) {
		return handleError(error);
	}
};

export const createMessageOpenAI = async (openai, request, threadID) => {
	try {
		const data = await request.json();
		const { content } = data;

		const threadMessages = await openai.beta.threads.messages.create(threadID, {
			role: 'user',
			content,
		});

		return new Response(JSON.stringify(threadMessages), {
			headers,
		});
	} catch (error) {
		return handleError(error);
	}
};

export const getMessagesOpenAI = async (openai, threadID) => {
	try {
		const threadMessages = await openai.beta.threads.messages.list(threadID);

		return new Response(JSON.stringify(threadMessages), {
			headers,
		});
	} catch (error) {
		return handleError(error);
	}
};

export const runThreadOpenAI = async (openai, assistantID, threadID) => {
	try {
		const run = await openai.beta.threads.runs.create(threadID, {
			assistant_id: assistantID,
		});

		return new Response(JSON.stringify(run), {
			headers,
		});
	} catch (error) {
		return handleError(error);
	}
};

export const getRunsOpenAI = async (openai, threadID) => {
	try {
		const runs = await openai.beta.threads.runs.list(threadID);

		return new Response(JSON.stringify(runs), {
			headers,
		});
	} catch (error) {
		return handleError(error);
	}
};

export const getRunOpenAI = async (openai, threadID, runID) => {
	try {
		const run = await openai.beta.threads.runs.retrieve(threadID, runID);

		return new Response(JSON.stringify(run), {
			headers,
		});
	} catch (error) {
		return handleError(error);
	}
};

export const getRunStepsOpenAI = async (openai, threadID, runID) => {
	try {
		const steps = await openai.beta.threads.runs.steps.list(threadID, runID);

		return new Response(JSON.stringify(steps), {
			headers,
		});
	} catch (error) {
		return handleError(error);
	}
};
