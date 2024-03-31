import OpenAI from 'openai';
import {
	createMessageOpenAI,
	createThreadOpenAI,
	getMessagesOpenAI,
	getRunOpenAI,
	getRunsOpenAI,
	getRunStepsOpenAI,
	runThreadOpenAI,
} from './openAIServices';

type Environment = {
	OPENAI_API_KEY: string | null;
	OPENAI_BASE_URL: string | null;
	OPENAI_ASSISTANT_ID: string | null;
};

const openAIFetch = {
	async fetch(request: Request, env: Environment): Promise<Response> {
		const url = new URL(request.url);
		const { pathname } = url;

		try {
			const openai = new OpenAI({
				apiKey: env.OPENAI_API_KEY ?? undefined,
				baseURL: env.OPENAI_BASE_URL,
			});
			const threadID = pathname.split('/')[2];
			const runID = pathname.split('/')[4];
			if (request.method === 'POST') {
				if (pathname === '/thread') {
					return await createThreadOpenAI(openai);
				} else if (pathname === `/thread/${threadID}/messages`) {
					return await createMessageOpenAI(openai, request, threadID);
				} else if (pathname === `/thread/${threadID}/runs`) {
					const data = await request.json();
					const { company } = data;
					const assistantId = company
						? env[`OPENAI_ASSISTANT_${company}_ID`]
						: env.OPENAI_ASSISTANT_ID;
					return await runThreadOpenAI(openai, assistantId, threadID);
				}
			} else if (request.method === 'GET') {
				if (pathname === `/thread/${threadID}/messages`) {
					return await getMessagesOpenAI(openai, threadID);
				} else if (pathname === `/thread/${threadID}/runs`) {
					return await getRunsOpenAI(openai, threadID);
				}
				if (pathname === `/thread/${threadID}/runs/${runID}/steps`) {
					return await getRunStepsOpenAI(openai, threadID, runID);
				}
				if (pathname === `/thread/${threadID}/runs/${runID}`) {
					return await getRunOpenAI(openai, threadID, runID);
				}
			}

			return new Response('Not Found', { status: 404 });
		} catch (e) {
			return new Response(e);
		}
	},
};

export default openAIFetch;
