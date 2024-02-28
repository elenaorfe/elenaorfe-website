import React, { useMemo, useState, FormEvent, KeyboardEvent } from 'react';
import ChatBotDialog from './ChatBotDialog';
import { sendQuestion } from '../utils/openAI';
import styles from '../styles/ChatBotConversation.module.css';
import { Message } from '../types/chatBot';
import ErrorMessage from './ErrorMessage';

interface ChatBotConversationProps {
	threadID: string;
	handleClose: () => void;
	translations: any;
}

const ChatBotConversation: React.FC<ChatBotConversationProps> = (props) => {
	const { threadID, handleClose, translations } = props;
	const [content, setContent] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [messages, setMessages] = useState<Message[]>([]);
	const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
	const [errorText, setErrorText] = useState<string>('');

	const introMessage: Message = {
		role: 'assistant',
		content: [
			{
				type: 'text',
				text: {
					value: translations.chatbot.assistant.intro,
				},
			},
		],
		created_at: new Date().getTime(),
	};

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
				setShowErrorMessage(true);
				const errorCode = error.message;
				let errorMessage = translations.chatbot.error.generic;
				if (errorCode === 'tooManyRequest') {
					errorMessage = translations.chatbot.error.tooManyRequest;
				}
				setErrorText(errorMessage);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<div className={styles.modal}>
			<div className={styles.modal_content}>
				<div className={styles.modal_header}>
					<button className={styles.btn_close} onClick={handleClose}>
						<ion-icon
							name="close-outline"
							aria-label="close-chat"
							size="large"
						></ion-icon>
					</button>
				</div>
				<div className={styles.modal_main}>
					{<ChatBotDialog message={introMessage} translations={translations} />}
					{messages?.map((message) => (
						<ChatBotDialog
							message={message}
							key={message.id}
							isLoading={message.content[0].text.value === ''}
							translations={translations}
						/>
					))}
				</div>
				{showErrorMessage && (
					<div className="mb-4">
						<ErrorMessage text={errorText} fullWidth={true} />
					</div>
				)}
				<form onSubmit={handleQuerySubmit} className={styles.modal_footer}>
					<label htmlFor="inputField" className="hidden">
						{translations.chatbot.input.placeholder}
					</label>
					<input
						type="text"
						id="inputField"
						value={content}
						onChange={(e) => setContent(e.target.value)}
						placeholder={translations.chatbot.input.placeholder}
						className={styles.input}
						onKeyDown={handleKeyPress}
					/>
					<button
						type="submit"
						aria-label={translations.chatbot.button.submit}
						className={`button-primary flex ${
							disabled ? 'button-disabled' : ''
						}`}
						disabled={disabled}
					>
						<ion-icon name="arrow-up-outline" size="large"></ion-icon>
					</button>
				</form>
			</div>
		</div>
	);
};

export default ChatBotConversation;
