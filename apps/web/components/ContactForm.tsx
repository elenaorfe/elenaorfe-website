import React, { ChangeEvent, useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import { MessageType, Translations } from '../types/common';
import { validateEmail } from '../utils/email';
import Button from './Button';
import Input from './Input';
import Message from './Message';
import Textarea from './Textarea';

type formData = {
	name: string;
	email: string;
	message: string;
};

type ContactFormProps = {
	callback: () => void;
	translations: Translations;
	initialFocusRef?: React.RefObject<HTMLInputElement>;
};

// Simple HTML sanitizer function for frontend
function sanitizeHTML(input: string): string {
	if (typeof input !== 'string') {
		return '';
	}
	
	// Replace HTML special characters with their entities
	return input
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#x27;');
}

const ContactForm = (props: ContactFormProps): React.JSX.Element => {
	const { callback, translations, initialFocusRef } = props;
	const [formData, setFormData] = useState<formData>({
		name: '',
		email: '',
		message: '',
	});
	const [errors, setErrors] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [showError, setShowError] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { setNotifications } = useContext(AppContext);

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	): void => {
		const { name, value } = e.target;
		// Sanitize input on change
		const sanitizedValue = sanitizeHTML(value);
		setFormData({ ...formData, [name]: sanitizedValue });
	};

	const validateForm = (): boolean => {
		let isValid = true;
		const errors: formData = {
			name: '',
			email: '',
			message: '',
		};

		if (formData.name === '') {
			errors.name = 'Name is required';
			isValid = false;
		}

		if (formData.email === '') {
			errors.email = 'Email is required';
			isValid = false;
		} else if (!validateEmail(formData.email)) {
			errors.email = 'Email is invalid';
			isValid = false;
		}

		if (formData.message === '') {
			errors.message = 'Message is required';
			isValid = false;
		}

		setErrors(errors);
		return isValid;
	};

	const handleSubmit = (e: any): void => {
		e.preventDefault();

		if (validateForm()) {
			setIsLoading(true);
			setShowError(false);

			try {
				fetch('/api/contact', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(formData),
				})
					.then((response) => {
						if (response.ok) {
							// Handle successful submission
							setNotifications([
								{
									message: translations.contact.form.success,
									type: MessageType.SUCCESS,
								},
							]);
							callback();
						} else {
							// Handle error
							setShowError(true);
						}
					})
					.catch(() => {
						setShowError(true);
					})
					.finally(() => {
						setIsLoading(false);
					});
			} catch (error) {
				setShowError(true);
				setIsLoading(false);
			}
		}
	};

	return (
		<div className="flex h-full flex-col">
			<p className="mb-8">{translations.contact.form.requiredFieldsLabel}</p>
			<form
				onSubmit={handleSubmit}
				className="flex h-full flex-col space-y-4"
				noValidate
				id="contact-form"
			>
				<Input
					id="input-name"
					label={translations.contact.form.name}
					type="text"
					name="name"
					value={formData.name}
					setValue={handleChange}
					required
					error={errors.name}
					ref={initialFocusRef}
					autocomplete="given-name"
				/>
				<Input
					id="input-email"
					label={translations.contact.form.email}
					type="email"
					name="email"
					value={formData.email}
					setValue={handleChange}
					required
					error={errors.email}
					autocomplete="email"
				/>
				<Textarea
					id="textarea-message"
					label={translations.contact.form.message}
					name="message"
					value={formData.message}
					setValue={handleChange}
					required
					error={errors.message}
				/>
				{showError && (
					<Message
						text={translations.contact.form.error}
						type={MessageType.ERROR}
						fullWidth={false}
					/>
				)}
				<div className="mt-auto text-end">
					<Button
						type="submit"
						isLoading={isLoading}
						ariaLabel={translations.contact.form.send}
					>
						<span>{translations.contact.form.send}</span>
					</Button>
				</div>
			</form>
		</div>
	);
};
export default ContactForm;
