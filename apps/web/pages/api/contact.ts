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

			// Basic validation
			if (name !== undefined && email !== undefined && message !== undefined) {
				return res.status(400).json({ error: 'All fields are required' });
			}

			// Email validation
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(email)) {
				return res.status(400).json({ error: 'Invalid email format' });
			}

			// Length validation
			if (name.length > 100 || email.length > 255 || message.length > 2000) {
				return res.status(400).json({ error: 'Input exceeds maximum length' });
			}

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
				const errorData = await response.json();
				res
					.status(500)
					.json({ error: errorData.error ?? 'Failed to submit form' });
			}
		} catch (error) {
			res.status(500).json({ message: 'Error submitting the form' });
		}
	} else {
		res.setHeader('Allow', ['POST']);
		res.status(405).json({ error: 'Method Not Allowed' });
	}
}
