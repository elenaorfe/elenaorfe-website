import { Icon } from '@iconify/react';
import React, {
	FormEvent,
	KeyboardEvent,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { Message } from '../../types/chatBot';
import { MessageType, Translations } from '../../types/common';
import Button from '../Button';
import Input from '../Input';
import ErrorMessage from '../Message';

type ChatBotInputProps = {
	messages: Message[];
	setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
	conversationId: string;
	translations: Translations;
};

const cleanMarkdown = (text: string): string => {
	console.log('Original text:', text);
	return text
		.replace(/\*\*(.*?)\*\*/g, '$1')
		.replace(/\*(.*?)\*/g, '$1')
		.replace(/`(.*?)`/g, '$1')
		.replace(/#{1,6}\s/g, '');
};

const ChatBotInput = (props: ChatBotInputProps): React.JSX.Element => {
	const { messages, setMessages, conversationId, translations } = props;
	const [input, setInput] = useState('');
	const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [errorText, setErrorText] = useState<string>('');

	const disabled = useMemo(() => isLoading || input === '', [input, isLoading]);

	const modalContent = document.getElementById('chatbot-modal-main-content');

	const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
		if (event.key === 'Enter') {
			event.preventDefault();
			handleQuerySubmit(event as unknown as FormEvent<HTMLFormElement>);
		}
	};

	const handleQuerySubmit = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault();

		// Prevent submitting if already loading or message is empty
		// Prevent submitting if already loading or message is empty
		if (disabled) return;

		const userMessage: Message = {
			id: crypto.randomUUID(),
			role: 'user',
			content: input,
		};

		const tempAssistantMessage: Message = {
			id: crypto.randomUUID(),
			role: 'assistant',
			content: '',
		};

		// Show user message immediately
		setMessages((prev) => [...prev, userMessage, tempAssistantMessage]);

		const currentInput = input;

		setInput('');
		setShowErrorMessage(false);
		setIsLoading(true);

		fetch('/api/updateChat', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ conversationId, message: currentInput }),
		})
			.then(async (response) => {
				// Delete the latest assistant message (the one with empty content) before adding the new one with the response
				setMessages((prev) =>
					prev.filter((msg) => msg.id !== tempAssistantMessage.id),
				);

				if (!response.ok) {
					throw new Error();
				}

				const data = await response.json();
				const assistantMessage: Message = {
					id: data.responseId,
					role: 'assistant',
					content: data.reply,
				};

				setMessages((prev) => [...prev, assistantMessage]);
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

	useEffect(() => {
		modalContent?.scrollTo({
			top: modalContent.scrollHeight,
			behavior: 'smooth',
		});
	}, [messages, modalContent]);

	return (
		<div className="mt-auto">
			{showErrorMessage && errorText !== '' && (
				<div className="mb-4">
					<ErrorMessage
						text={errorText}
						type={MessageType.ERROR}
						fullWidth={true}
					/>
				</div>
			)}
			<form onSubmit={handleQuerySubmit} id="chatbot-form">
				<div className="border-persian-green-500 flex justify-between gap-2 rounded-lg border-2 p-1 shadow-xl">
					<Input
						id="chatbot-input"
						type="text"
						name="content"
						label={translations.chatbot.input.placeholder}
						displayLabel={false}
						placeholder={translations.chatbot.input.placeholder}
						value={input}
						setValue={(e) => setInput(e.target.value)}
						onKeyDown={handleKeyPress}
						disabled={isLoading}
						showBorder={false}
						className="flex-1"
						autocomplete="off"
					/>
					<Button type="submit" ariaLabel={translations.chatbot.button.submit}>
						<div className="flex items-center gap-1">
							<span className="text-base">
								{translations.chatbot.button.submit}
							</span>
							<Icon icon="mage:stars-c" />
						</div>
					</Button>
				</div>
			</form>
		</div>
	);
};

export default ChatBotInput;
