import { Lang } from '../types/common';

const validateDate = (dateString: string): boolean => {
	return /^\d{4}-\d{2}-\d{2}$/.test(dateString);
};

export const formatDate = (dateString: string): string => {
	if (!validateDate(dateString)) {
		throw new Error('Invalid date string format. Expected format: YYYY-MM-DD.');
	}

	const [year, month] = dateString.split('-');
	return `${month}.${year}`;
};

export const getYear = (dateString: string): number => {
	if (!validateDate(dateString)) {
		throw new Error('Invalid date string format. Expected format: YYYY-MM-DD.');
	}

	return new Date(dateString).getFullYear();
};

export const getMonthsBetween = (
	startDate: string,
	endDate?: string,
): number => {
	const start = new Date(startDate);
	const end = endDate !== undefined ? new Date(endDate) : new Date();
	const months = (end.getFullYear() - start.getFullYear()) * 12;
	return months + end.getMonth() - start.getMonth();
};

export const getYearsBetween = (
	startDate: string,
	endDate?: string,
): number => {
	const months = getMonthsBetween(startDate, endDate);
	return Math.floor(months / 12);
};

export const formatJoinDate = (input: string, language: Lang): string => {
	const months = {
		en: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		],
		es: [
			'enero',
			'febrero',
			'marzo',
			'abril',
			'mayo',
			'junio',
			'julio',
			'agosto',
			'septiembre',
			'octubre',
			'noviembre',
			'diciembre',
		],
	};

	const [year, month] = input.split('-');

	const monthIndex = parseInt(month, 10) - 1;
	if (monthIndex < 0 || monthIndex > 11) {
		throw new Error('Invalid month');
	}

	const formattedMonth = months[language][monthIndex];
	const formattedYear = language === 'es' ? `de ${year}` : `${year}`;
	const prefix = language === 'es' ? 'Se unió en' : 'Joined in';

	return `${prefix} ${formattedMonth} ${formattedYear}`;
};
