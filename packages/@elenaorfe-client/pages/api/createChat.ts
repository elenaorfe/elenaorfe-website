import { NextApiRequest, NextApiResponse } from 'next';
import { getEnvVars } from '../../config/environment';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
): Promise<void> {
	const { chatbotUrl } = getEnvVars();

	if (req.method === 'POST') {
		try {
			const response = await fetch(`${chatbotUrl}/thread`, { method: 'POST' });

			if (!response.ok) {
				res.status(response.status).json({ message: 'Error creating a chat' });
			}

			const data = await response.json();
			res.status(200).json(data);
		} catch (error) {
			return res.status(500).json({ message: 'Error creating a chat' });
		}
	} else {
		res.status(405).json({ error: 'Method Not Allowed' });
	}
}
