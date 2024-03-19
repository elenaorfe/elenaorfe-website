import React, { useState, FormEvent, KeyboardEvent, useMemo } from 'react';
import { Icon } from '@iconify/react';
import { Message } from '../types/chatBot';
import { sendQuestion } from '../utils/openAI';
import ErrorMessage from './Message';
import Input from './Input';
import { MessageType, Translations } from '../types/common';
import Button from './Button';

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
			<form onSubmit={handleQuerySubmit}>
				<div className="flex border-2 border-[--color-primary] rounded-lg shadow-xl p-2 gap-4">
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
						showBorder={false}
					/>
					<Button
						type="submit"
						disabled={disabled}
						ariaLabel={translations.chatbot.button.submit}
					>
						<div className="flex gap-1 my-auto">
							<span className="text-base">
								{translations.chatbot.button.submit}
							</span>
							<Icon icon="mage:stars-c" />
						</div>
					</Button>
				</div>
			</form>
		</React.Fragment>
	);
};

export default ChatBotInput;
