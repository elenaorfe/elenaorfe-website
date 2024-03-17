import React, { useState, FormEvent, KeyboardEvent, useMemo } from 'react';
import { Message } from '../types/chatBot';
import { sendQuestion } from '../utils/openAI';
import ErrorMessage from './Message';
import Input from './Input';
import { MessageType, Translations } from '../types/common';

interface ChatBotInputProps {
	messages: Message[];
	setMessages: (messages: Message[]) => void;
	threadID: string;
	translations: Translations;
}

const ChatBotInput: React.FC<ChatBotInputProps> = ({
	messages,
	setMessages,
	threadID,
	translations,
}) => {
	const [content, setContent] = useState<string>('');
	const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [errorText, setErrorText] = useState<string>('');

	const disabled = useMemo(
		() => isLoading || content === '',
		[content, isLoading]
	);

	const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
		if (event.key === 'Enter') {
			event.preventDefault();
			handleQuerySubmit(event as unknown as FormEvent<HTMLFormElement>);
		}
	};

	const handleQuerySubmit = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		setMessages([
			...messages,
			{
				content: [{ text: { value: content } }],
				role: 'user',
				created_at: new Date().getTime(),
			},
			{
				content: [{ text: { value: '' } }],
				role: 'assistant',
				created_at: new Date().getTime(),
			},
		]);
		setContent('');
		setShowErrorMessage(false);
		setIsLoading(true);
		sendQuestion(content, threadID)
			.then((response) => {
				if (response !== undefined) {
					setMessages(
						response.sort(
							(a: Message, b: Message) => a.created_at - b.created_at
						)
					);
				}
			})
			.catch((error) => {
				const errorCode = error.message;
				let errorMessage = translations.chatbot.error.generic;
				if (errorCode === 'tooManyRequest') {
					errorMessage = translations.chatbot.error.tooManyRequest;
				}
				setErrorText(errorMessage);
				setShowErrorMessage(true);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<React.Fragment>
			{showErrorMessage && errorText !== '' && (
				<div className="mb-4">
					<ErrorMessage
						text={errorText}
						type={MessageType.ERROR}
						fullWidth={true}
					/>
				</div>
			)}
			<form onSubmit={handleQuerySubmit} className="flex gap-4">
				<label htmlFor="inputField" className="hidden">
					{translations.chatbot.input.placeholder}
				</label>
				<Input
					id="input-field"
					type="text"
					name="content"
					placeholder={translations.chatbot.input.placeholder}
					value={content}
					setValue={(e) => setContent(e.target.value)}
					onKeyDown={handleKeyPress}
					disabled={isLoading}
				/>
				<button
					type="submit"
					aria-label={translations.chatbot.button.submit}
					className={`button-primary flex ${disabled ? 'button-disabled' : ''}`}
					disabled={disabled}
				>
					<ion-icon name="arrow-up-outline" size="large"></ion-icon>
				</button>
			</form>
		</React.Fragment>
	);
};

export default ChatBotInput;
