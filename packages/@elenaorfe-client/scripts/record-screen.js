const { chromium } = require('playwright');
const { saveVideo } = require('playwright-video');

async function record(url) {
	try {
		const browser = await chromium.launch({ headless: false });
		const context = await browser.newContext({
			viewport: { width: 1600, height: 900 },
		});
		const page = await context.newPage();
		await page.goto(url);

		// Wait for the page to load
		await new Promise((resolve) => setTimeout(resolve, 1000));

		// Start recording the screen
		const capture = await saveVideo(
			page,
			'./public/assets/videos/screen-record-personal-website.mp4',
		);

		async function askQuestion(question, index) {
			// Select the form fields
			const chatbotInput = page.locator('#chatbot-input');
			const submitButton = page.locator('button[type="submit"]');

			// Fill the question
			await chatbotInput.type(question);

			// Wait
			await page.waitForTimeout(1000);

			// Submit the form
			await submitButton.click();

			// Wait for the answer to appear
			await page.waitForSelector(`#chatbot-message-${index}`);

			// Wait
			await page.waitForTimeout(1000);
		}

		async function chatWithMe() {
			// Open the chatbot
			const chatbotOpenButton = page.locator('#chatbot-open-button');
			await chatbotOpenButton.click();

			// Wait for the chatbot to open
			await page.waitForSelector('#chatbot-form');

			// Wait
			await page.waitForTimeout(2000);

			// Fill the first question
			await askQuestion('What programming languages are you proficient in?', 2);

			// Fill the second question
			await askQuestion('What are your hobbies?', 4);

			// Fill the third question
			await askQuestion('How can I contact you?', 6);

			// Fill the fourth question
			await askQuestion('Thanks. Have a nice day!', 8);

			// Wait
			await page.waitForTimeout(2000);
		}

		await chatWithMe();

		await capture.stop();
		await browser.close();

		console.log('Screen recording completed successfully 🎉');
	} catch (error) {
		console.error('❌ Error recording screen:', error);
	}
}

// Call the function with the URL to record the screen
const url = 'http://localhost:3000/';
record(url);
