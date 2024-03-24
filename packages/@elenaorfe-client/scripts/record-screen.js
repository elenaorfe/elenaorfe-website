const { chromium } = require('playwright');
const { saveVideo } = require('playwright-video');

async function scrollAndRecord(url) {
	try {
		const browser = await chromium.launch({ headless: false });
		const page = await browser.newPage();
		await page.goto(url);

		// Wait for the page to load
		await new Promise((resolve) => setTimeout(resolve, 1000));

		// Start recording the screen
		const capture = await saveVideo(
			page,
			'./public/assets/videos/screen-record-personal-website.mp4',
		);

		// Scroll slowly to the bottom of the page
		await page.evaluate(async () => {
			// Function to scroll gradually to the bottom
			async function scrollToBottom() {
				// Scroll one pixel at a time until reaching the bottom
				while (
					window.scrollY + window.innerHeight <
					document.body.scrollHeight
				) {
					window.scrollTo(0, window.scrollY + 1);
					// Adjust the delay time to control the scroll speed
					await new Promise((resolve) => setTimeout(resolve, 0.1));
				}
			}

			await scrollToBottom();
		});

		await new Promise((resolve) => setTimeout(resolve, 1000));

		// Scroll back to the top of the page
		await page.evaluate(async () => {
			window.scrollTo(0, 0);
			await new Promise((resolve) => setTimeout(resolve, 1000));
		});

		// 		// Open the contact form and send a message
		// 		await page.evaluate(async () => {
		// 			const contactFormButton = document.getElementById(
		// 				'contact-form-open-button',
		// 			);
		// 			contactFormButton.click();
		// 			await new Promise((resolve) => setTimeout(resolve, 1000));
		// 			// Write a name, email and message
		// 			const nameInput = document.getElementById('input-name');
		// 			nameInput.setAttribute('value', 'John Doe');
		// 			const emailInput = document.getElementById('input-email');
		// 			emailInput.setAttribute('value', 'john@example.com');
		// 			const messageInput = document.getElementById('textarea-message');

		// 			const messageContent = `Dear Elena,

		// I hope this message finds you well.
		// I came across your amazing website and was thoroughly impressed.
		// Could we schedule a meeting to further discuss the details of the project?

		// Best regards,
		// John Doe
		// `;
		// 			messageInput.innerHTML = messageContent;
		// 			await new Promise((resolve) => setTimeout(resolve, 1000));

		// 			// Submit the form
		// 			const contactForm = document.getElementById('contact-form');
		// 			contactForm.submit();
		// 		});

		// // Download the CV
		// await page.evaluate(async () => {
		// 	const downloadCVButton = document.getElementById('download-cv-button');
		// 	downloadCVButton.click();
		// 	await new Promise((resolve) => setTimeout(resolve, 1000));
		// });

		// Open the chatbot and have a conversation
		await page.evaluate(async () => {
			const chatbotOpenButton = document.getElementById('chatbot-open-button');
			chatbotOpenButton.click();
			await new Promise((resolve) => setTimeout(resolve, 5000));
		});

		await capture.stop();
		await browser.close();

		console.log('Screen recording completed successfully 🎉');
	} catch (error) {
		console.error('❌ Error recording screen:', error);
	}
}

// Call the function with the URL to scroll and record
const url = 'http://localhost:3000/';
scrollAndRecord(url);
