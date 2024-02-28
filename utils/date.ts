export const formatDate = (dateString: string): string => {
	const [year, month] = dateString.split('-');
	return `${month}.${year}`;
};

export const getYear = (dateString: string): number => {
	return new Date(dateString).getFullYear();
};
