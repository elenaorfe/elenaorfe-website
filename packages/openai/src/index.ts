import { OpenAI } from 'openai';

type Environment = {
	OPENAI_API_KEY: string;
	OPENAI_ORGANIZATION_ID: string;
	OPENAI_PROJECT_ID: string;
	OPENAI_VECTOR_STORE_ID: string;
};

const OPENAI_MODEL = 'gpt-5.5';
const OPENAI_ASSISTANT_INSTRUCTIONS = `
	You are a Q&A bot for Elena, your answers should be in first person as if you were Elena. 
	Use the attached file to answer questions as best as you can, you should strictly answer based on the file provided and not on your own knowledge. 
	If the content is not available in the file, you will specify it in your response and encourage the visitor to send through the website. 
	Do not mention the uploaded file, just that you are not aware of that information.
`;

const corsHeaders = {
	'Access-Control-Allow-Origin': 'https://elenaorfe.com',
	'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
	'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

const openAIFetch = {
	async fetch(request: Request, env: Environment): Promise<Response> {
		const url = new URL(request.url);
		try {
			// Handle CORS preflight
			if (request.method === 'OPTIONS') {
				return new Response(null, {
					headers: corsHeaders,
				});
			}

			// Health check
			if (url.pathname === '/health') {
				return jsonResponse({
					status: 'ok',
				});
			}

			const openai = new OpenAI({
				apiKey: env.OPENAI_API_KEY,
				organization: env.OPENAI_ORGANIZATION_ID,
				project: env.OPENAI_PROJECT_ID,
			});

			/**
			 * Create a conversation
			 *
			 * POST /api/conversations
			 */
			if (url.pathname === '/api/conversations' && request.method === 'POST') {
				const conversation = await openai.conversations.create();

				return jsonResponse({
					id: conversation.id,
				});
			}

			/**
			 * Chat using a conversation
			 *
			 * POST /api/chat
			 *
			 * body:
			 * {
			 *   "conversationId": "...",
			 *   "message": "Hello"
			 * }
			 */
			if (url.pathname === '/api/chat' && request.method === 'POST') {
				const body = (await request.json()) as {
					conversationId?: string;
					message?: string;
				};

				if (body.message == null) {
					return errorResponse('Message is required', 400);
				}

				const response = await openai.responses.create({
					model: OPENAI_MODEL,
					instructions: OPENAI_ASSISTANT_INSTRUCTIONS,
					conversation: body.conversationId,
					input: body.message,
					tools: [
						{
							type: 'file_search',
							vector_store_ids: [env.OPENAI_VECTOR_STORE_ID],
						},
					],
				});

				return jsonResponse({
					reply: response.output_text,
					responseId: response.id,
				});
			}

			return errorResponse('Not found', 404);
		} catch (error) {
			console.error(error);

			return errorResponse(
				error instanceof Error ? error.message : 'Internal server error',
				500,
			);
		}
	},
};

function jsonResponse(data: unknown, status = 200): Response {
	return new Response(JSON.stringify(data), {
		status,
		headers: {
			'Content-Type': 'application/json',
			...corsHeaders,
		},
	});
}

function errorResponse(message: string, status = 400): Response {
	return jsonResponse(
		{
			error: message,
		},
		status,
	);
}

export default openAIFetch;
