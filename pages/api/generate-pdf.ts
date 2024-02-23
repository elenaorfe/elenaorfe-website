import { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
): Promise<void> {
	try {
		const currentUrl = req.query.url as string;

		// Launch a headless browser
		const browser = await puppeteer.launch();
		const page = await browser.newPage();

		// Navigate to the webpage you want to capture
		await page.goto(`${currentUrl}/cv`);

		// Wait for all images to load
		await page.waitForSelector('img');

		// Generate the PDF
		const pdfBuffer = await page.pdf({ printBackground: true });

		// Close the browser
		await browser.close();

		// Set response headers for PDF download
		res.setHeader('Content-Type', 'application/pdf');
		res.setHeader(
			'Content-Disposition',
			'attachment; filename="CV_ElenaOrtega.pdf"'
		);

		// Send the PDF buffer as response
		res.status(200).send(pdfBuffer);
	} catch (error) {
		console.error('PDF generation error:', error);
		res.status(500).end();
	}
}
