import { validateEmail } from '../../utils/email';

describe('validateEmail', () => {
	it('should return true for valid email addresses', () => {
		const validEmail = 'test@example.com';

		expect(validateEmail(validEmail)).toBe(true);
	});

	it('should return false for invalid email addresses', () => {
		const invalidEmails = [
			'invalidemail',
			'invalid@example',
			'@example.com',
			'invalidemail@',
			'invalid@ example.com',
		];

		invalidEmails.forEach((email) => {
			expect(validateEmail(email)).toBe(false);
		});
	});

	it('should return false for empty string', () => {
		expect(validateEmail('')).toBe(false);
	});
});
