const puppeteer = require('puppeteer');
const path = require('path');

const fileNameEn = 'CV_ElenaOrtega.pdf';
const fileNameEs = 'CV_ElenaOrtega_ES.pdf';
const urlEn = 'http://localhost:3000/en/cv';
const urlEs = 'http://localhost:3000/es/cv';

async function generatePDF(language) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	const outputDirectory = path.join(__dirname, '../public/assets/documents');
	const fileName = language === 'es' ? fileNameEs : fileNameEn;
	const filePath = path.join(outputDirectory, fileName);
	const url = language === 'es' ? urlEs : urlEn;

	await page.goto(url, { waitUntil: 'networkidle2' });

	await page.pdf({ path: filePath, format: 'A4', printBackground: true });

	await browser.close();
}

generatePDF('en')
	.then(() => console.log('English CV PDF generated successfully 🎉'))
	.catch((error) =>
		console.error('❌ Error generating English CV PDF:', error)
	);

generatePDF('es')
	.then(() => console.log('Spanish CV PDF generated successfully 🎉'))
	.catch((error) =>
		console.error('❌ Error generating Spanish CV PDF:', error)
	);
