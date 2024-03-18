export default async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			const { name, email, message } = req.body;

			const response = await fetch(process.env.NEXT_PUBLIC_CONTACT_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ name, email, message }),
			});

			if (response.ok) {
				// Example: Respond with a success message
				res.status(200).json({ message: 'Form submitted successfully' });
			} else {
				// Example: Respond with an error message
				res.status(500).json({ error: 'Failed to submit form' });
			}
		} catch (error) {
			res.status(500).json({ message: 'Error submitting the form' });
		}
	} else {
		res.setHeader('Allow', ['POST']);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
