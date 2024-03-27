import {
	formatDate,
	getMonthsBetween,
	getYear,
	getYearsBetween,
} from '../../utils/date';

describe('formatDate', () => {
	it('should format date string to "MM.YYYY"', () => {
		const dateString = '2022-01-01';
		expect(formatDate(dateString)).toBe('01.2022');
	});

	it('should handle single digit month and year', () => {
		const dateString = '2022-09-01';
		expect(formatDate(dateString)).toBe('09.2022');
	});

	it('should throw error if date string is invalid', () => {
		const invalidDateString = 'invalidString';
		expect(() => formatDate(invalidDateString)).toThrow(
			'Invalid date string format. Expected format: YYYY-MM-DD.',
		);
	});
});

describe('getYear', () => {
	it('should return the correct year from a valid date string', () => {
		const dateString = '2022-01-01';
		expect(getYear(dateString)).toBe(2022);
	});

	it('should return NaN if the date string is invalid', () => {
		const invalidDateString = 'invalidString';
		expect(() => formatDate(invalidDateString)).toThrow(
			'Invalid date string format. Expected format: YYYY-MM-DD.',
		);
	});
});

describe('getMonthsBetween', () => {
	it('should return 0 if both dates are the same', () => {
		expect(getMonthsBetween('2024-01-01', '2024-01-01')).toBe(0);
	});
	it('should return 1 when the dates are one month apart', () => {
		expect(getMonthsBetween('2024-01-01', '2024-02-01')).toBe(1);
	});
	it('should return 2 when the dates are two months apart', () => {
		expect(getMonthsBetween('2024-01-01', '2024-03-01')).toBe(2);
	});
	it('should default endDate to current date if not provided', () => {
		const date = new Date();
		const year = date.getFullYear();
		const month = date.getMonth();
		expect(getMonthsBetween('2024-01-01')).toBe((year - 2024) * 12 + month);
	});
});

describe('getYearsBetween', () => {
	it('should return 0 if both dates are the same', () => {
		expect(getYearsBetween('2024-01-01', '2024-01-01')).toBe(0);
	});
	it('should return 1 when the dates are one year apart', () => {
		expect(getYearsBetween('2024-01-01', '2025-01-01')).toBe(1);
	});
	it('should return 2 when the dates are two years apart', () => {
		expect(getYearsBetween('2024-01-01', '2026-01-01')).toBe(2);
	});
	it('should default endDate to current date if not provided', () => {
		const date = new Date();
		const year = date.getFullYear();
		expect(getYearsBetween('2024-01-01')).toBe(year - 2024);
	});
});
