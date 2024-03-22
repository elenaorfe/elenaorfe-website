export const formatDate = (dateString: string): string => {
	const [year, month] = dateString.split('-');
	return `${month}.${year}`;
};

export const getYear = (dateString: string): number => {
	return new Date(dateString).getFullYear();
};

export const getMonthsBetween = (
	startDate: string,
	endDate?: string,
): number => {
	const diff = Math.abs(
		(endDate === undefined
			? new Date().getTime()
			: new Date(endDate).getTime()) - new Date(startDate).getTime(),
	);
	const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
	return Math.floor(days / 30);
};

export const getYearsBetween = (
	startDate: string,
	endDate?: string,
): number => {
	const months = getMonthsBetween(startDate, endDate);
	return Math.floor(months / 12);
};
