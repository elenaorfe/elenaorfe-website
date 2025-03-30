import { NextApiRequest, NextApiResponse } from 'next';
import { getEnvVars } from '../../config/environment';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
): Promise<void> {
	const { contactUrl } = getEnvVars();

	if (req.method === 'POST') {
		try {
			const { name, email, message } = req.body;

			const response = await fetch(contactUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ name, email, message }),
			});

			if (response.ok) {
				res.status(200).json({ message: 'Form submitted successfully' });
			} else {
				res.status(500).json({ error: 'Failed to submit form' });
			}
		} catch (error) {
			res.status(500).json({ message: 'Error submitting the form' });
		}
	} else {
		res.setHeader('Allow', ['POST']);
		res.status(405).json({ error: 'Method Not Allowed' });
	}
}
