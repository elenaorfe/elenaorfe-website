import { Resend } from 'resend';

const resend = new Resend(RESEND_API_KEY);

addEventListener('fetch', (event) => {
	event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
	const { name, email, message } = await request.json();

	if (request.method === 'POST') {
		try {
			const response = await resend.emails.send({
				from: EMAIL_FROM,
				to: EMAIL_TO,
				subject: 'Message received from the website',
				html:
					'<!DOCTYPE html>' +
					'<html lang="en">' +
					'<head>' +
					'<meta charset="UTF-8" />' +
					'<meta http-equiv="X-UA-Compatible" content="IE=edge" />' +
					'<meta name="viewport" content="width=device-width, initial-scale=1.0" />' +
					'<title>New message from then website!</title>' +
					'</head>' +
					'<body style="font-family: sans-serif;">' +
					'<div style="text-align: center; margin-top: 20px; margin-bottom: 20px;">' +
					`<img src=${LOGO} height="75" />` +
					'</div>' +
					'<div style="max-width: 600px; margin: 0 auto; padding: 20px 25px; border: 1px solid #efefef; border-radius: 8px;">' +
					'<h2 style="color: #2a9d8f; text-align: center;">New Contact Form Submission</h2>' +
					'<hr style="border:1px solid #efefef" />' +
					'<p>Hello,</p>' +
					'<p>You have received a new message through your website.</p>' +
					'<hr style="border:1px solid #efefef" />' +
					`<p><strong>Name:</strong> ${name}</p>` +
					`<p><strong>Email:</strong> ${email}</p>` +
					`<p><strong>Message:</strong> ${message}</p>` +
					'</div>' +
					'</body>',
			});

			if (response.error) {
				console.error('Error sending email:', response.error);
				throw new Error(
					`Error: ${response.error.statusCode} - ${response.error.message}`,
				);
			}

			console.log('Email sent successfully.');
			return new Response({ message: 'Email sent successfully' });
		} catch (error) {
			console.error('Error sending email:', error);
			throw error;
		}
	}
}
