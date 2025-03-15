export const removeSourceReferences = (text: string): string => {
	return text.replace(/\s*【.*?】/g, '');
};

export const getCoverLetterCompany = (pathname: string): string | null => {
	const match = pathname.match(/\/cover-letters\/(.*)/);
	// Split the string by hyphen and capitalize each word
	const words: string[] | null = match
		? match[1]
				.split('-')
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		: null;
	// Join the capitalized words with a space between them
	return words !== null ? words.join(' ') : null;
};

export const replaceCompanyPlaceholder = (
	company: string,
	text: string,
): string => {
	return text.replace(/{{companyName}}/g, company);
};
