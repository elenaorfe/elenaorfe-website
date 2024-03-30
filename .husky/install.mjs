// Skip Husky install in production and CI
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
console.log('process.env.CI', process.env.CI);
if (process.env.NODE_ENV !== 'production' && process.env.CI !== 'true') {
	(await import('husky')).default;
	console.log('Husky installed 🎉');
}
