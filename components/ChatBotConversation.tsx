import React, { useMemo, useState, FormEvent, KeyboardEvent } from 'react';
import ChatBotDialog from './ChatBotDialog';
import { sendQuestion } from '../utils/openAI';
import styles from '../styles/ChatBotConversation.module.css';
import { Message } from '../types/chatBot';
import ErrorMessage from './ErrorMessage';

interface ChatBotConversationProps {
	threadID: string;
	handleClose: () => void;
}

const introMessage: Message = {
	role: 'assistant',
	content: [
		{
			type: 'text',
			text: {
				value:
					'Hello! 👋 How can I assist you today? As a GPT, I appreciate kindness in our interactions. For a more in-depth conversation, feel free to reach out via email at elenaorfe@gmail.com .',
			},
		},
	],
	created_at: new Date().getTime(),
};

const ChatBotConversation = (props: ChatBotConversationProps): JSX.Element => {
	const { threadID, handleClose } = props;
	const [content, setContent] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [messages, setMessages] = useState<Message[]>([]);
	const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
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
				setErrorText(error.message);
			})
			.finally(() => {
				setIsLoading(false);
				setContent('');
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
					{<ChatBotDialog message={introMessage} />}
					{messages?.map((message) => (
						<ChatBotDialog message={message} key={message.id} />
					))}
					{isLoading && (
						<div>
							<ChatBotDialog
								message={{
									content: [{ text: { value: content } }],
									role: 'user',
									created_at: new Date().getTime(),
								}}
							/>
							<ChatBotDialog
								message={{
									content: [{ text: { value: '' } }],
									role: 'assistant',
									created_at: new Date().getTime(),
								}}
								isLoading={true}
							/>
						</div>
					)}
				</div>
				{showErrorMessage && (
					<div className="mb-4">
						<ErrorMessage text={errorText} fullWidth={true} />
					</div>
				)}
				<form onSubmit={handleQuerySubmit} className={styles.modal_footer}>
					<label htmlFor="inputField" className="hidden">
						Ask a question
					</label>
					<input
						type="text"
						id="inputField"
						value={content}
						disabled={isLoading}
						onChange={(e) => setContent(e.target.value)}
						placeholder="Ask a question..."
						className={styles.input}
						onKeyDown={handleKeyPress}
					/>
					<button
						type="submit"
						aria-label="Submit"
						className={`button-primary flex ${
							disabled ? 'button-disabled' : ''
						}`}
						disabled={disabled}
					>
						<ion-icon
							name="arrow-up-outline"
							aria-label="send"
							size="large"
						></ion-icon>
					</button>
				</form>
			</div>
		</div>
	);
};

export default ChatBotConversation;
