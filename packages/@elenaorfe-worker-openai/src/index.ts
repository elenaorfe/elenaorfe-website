import OpenAI from 'openai';
import {
	createMessageOpenAI,
	createThreadOpenAI,
	getMessagesOpenAI,
	getRunOpenAI,
	getRunStepsOpenAI,
	getRunsOpenAI,
	runThreadOpenAI,
} from './openAIServices';

interface Environment {
	OPENAI_API_KEY: string | null;
	OPENAI_BASE_URL: string | null;
	OPENAI_ASSISTANT_ID: string | null;
}

export default {
	async fetch(request: Request, env: Environment): Promise<Response> {
		const url = new URL(request.url);
		const { pathname } = url;

		try {
			const openai = new OpenAI({
				apiKey: env.OPENAI_API_KEY,
				baseURL: env.OPENAI_BASE_URL,
			});
			const threadID = pathname.split('/')[2];
			const runID = pathname.split('/')[4];
			if (request.method === 'POST') {
				if (pathname === '/thread') {
					return createThreadOpenAI(openai);
				} else if (pathname === `/thread/${threadID}/messages`) {
					return createMessageOpenAI(openai, request, threadID);
				} else if (pathname === `/thread/${threadID}/runs`) {
					return runThreadOpenAI(openai, env.OPENAI_ASSISTANT_ID, threadID);
				}
			} else if (request.method === 'GET') {
				if (pathname === `/thread/${threadID}/messages`) {
					return getMessagesOpenAI(openai, threadID);
				} else if (pathname === `/thread/${threadID}/runs`) {
					return getRunsOpenAI(openai, threadID);
				}
				if (pathname === `/thread/${threadID}/runs/${runID}/steps`) {
					return getRunStepsOpenAI(openai, threadID, runID);
				}
				if (pathname === `/thread/${threadID}/runs/${runID}`) {
					return getRunOpenAI(openai, threadID, runID);
				}
			}

			return new Response('Not Found', { status: 404 });
		} catch (e) {
			return new Response(e);
		}
	},
};
