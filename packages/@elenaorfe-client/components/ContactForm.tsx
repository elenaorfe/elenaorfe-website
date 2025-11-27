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
		setFormData({ ...formData, [name]: value });
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
		<form
			onSubmit={handleSubmit}
			className="space-y-4"
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
			<div className="text-end">
				<Button
					type="submit"
					disabled={
						formData.name === '' ||
						formData.email === '' ||
						formData.message === ''
					}
					isLoading={isLoading}
					ariaLabel={translations.contact.form.send}
				>
					<span>{translations.contact.form.send}</span>
				</Button>
			</div>
		</form>
	);
};
export default ContactForm;
