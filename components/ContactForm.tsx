import React, { ChangeEvent, useContext, useMemo, useState } from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Message from './Message';
import { MessageType, Translations } from '../types/common';
import AppContext from '../context/AppContext';

interface formData {
	name: string;
	email: string;
	message: string;
}

interface ContactFormProps {
	callback: () => void;
	translations: Translations;
}

const ContactForm: React.FC<ContactFormProps> = ({
	callback,
	translations,
}) => {
	const [formData, setFormData] = useState<formData>({
		name: '',
		email: '',
		message: '',
	});
	const [showError, setShowError] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { setNotifications } = useContext(AppContext);
	const disabled = useMemo(
		() =>
			isLoading ||
			formData.name === '' ||
			formData.email === '' ||
			formData.message === '',
		[formData.email, formData.message, formData.name, isLoading]
	);

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	): void => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e: any): void => {
		e.preventDefault();
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
						console.log('Form submitted successfully');
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
				});
		} catch (error) {
			setShowError(true);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<Input
				id="input-name"
				type="text"
				name="name"
				placeholder={translations.contact.form.name}
				value={formData.name}
				setValue={handleChange}
			/>
			<Input
				id="input-email"
				type="email"
				name="email"
				placeholder={translations.contact.form.email}
				value={formData.email}
				setValue={handleChange}
			/>
			<Textarea
				placeholder={translations.contact.form.message}
				name="message"
				value={formData.message}
				setValue={handleChange}
			/>
			{showError && (
				<Message
					text={translations.contact.form.error}
					type={MessageType.ERROR}
					fullWidth={false}
				/>
			)}
			<div className="text-end">
				<button
					type="submit"
					className={`button-primary text-base ${
						disabled ? 'button-disabled' : ''
					}`}
					disabled={disabled}
				>
					{translations.contact.form.send}
				</button>
			</div>
		</form>
	);
};
export default ContactForm;
