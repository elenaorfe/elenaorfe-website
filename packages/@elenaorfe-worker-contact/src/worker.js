addEventListener('fetch', (event) => {
	event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
	const { name, email, message } = await request.json();
	let respContent = '';

	const sendRequest = new Request(EMAIL_URL, {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify({
			personalizations: [{ to: [{ email: EMAIL_TO, name: NAME_TO }] }],
			from: {
				email: EMAIL_FROM,
				name: NAME_FROM,
			},
			subject: 'Message received from the website',
			content: [
				{
					type: 'text/html',
					value:
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
						'</body>' +
						'</html>',
				},
			],
		}),
	});

	if (request.method === 'POST') {
		try {
			const resp = await fetch(sendRequest);

			if (!resp.ok) {
				if (resp.status === 401) {
					throw new Error("Unauthorized");
				}
				throw new Error(`HTTP Error: ${resp.status} ${resp.statusText}`);
			}

			const respText = await resp.text();
			respContent = resp.status + ' ' + resp.statusText + '\n\n' + respText;
		} catch (error) {
			throw error;
		}
	}

	const htmlContent =
		'<html><head></head><body><pre>' +
		'<pre>' +
		respContent +
		'</pre>' +
		'</body></html>';

	return new Response(htmlContent, {
		headers: { 'content-type': 'text/html' },
	});
}
