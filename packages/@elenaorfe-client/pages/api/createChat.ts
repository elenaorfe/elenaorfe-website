import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (!process.env.NEXT_PUBLIC_CHATBOT_URL) {
		return res.status(400).end('Url is not defined');
	}

	if (req.method === 'POST') {
		try {
			const response = await fetch(
				process.env.NEXT_PUBLIC_CHATBOT_URL + '/thread',
				{ method: 'POST' },
			);

			if (!response.ok) {
				res.status(response.status).json({ message: 'Error creating a chat' });
			}

			const data = await response.json();
			res.status(200).json(data);
		} catch (error) {
			return res.status(500).json({ message: 'Error creating a chat' });
		}
	} else {
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
