import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import React, {
	FormEvent,
	KeyboardEvent,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { Message } from '../../types/chatBot';
import { MessageType, Translations } from '../../types/common';
import { getCoverLetterCompany, sendQuestion } from '../../utils/openAI';
import Button from '../Button';
import Input from '../Input';
import ErrorMessage from '../Message';

type ChatBotInputProps = {
	messages: Message[];
	setMessages: (messages: Message[]) => void;
	threadID: string;
	translations: Translations;
};

const ChatBotInput = (props: ChatBotInputProps): React.JSX.Element => {
	const { messages, setMessages, threadID, translations } = props;
	const [content, setContent] = useState<string>('');
	const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [errorText, setErrorText] = useState<string>('');
	const { pathname } = useRouter();
	const company = useMemo(
		() =>
			getCoverLetterCompany(pathname)?.toUpperCase().replace(/\s/g, '') ?? null,
		[pathname],
	);

	const disabled = useMemo(
		() => isLoading || content === '',
		[content, isLoading],
	);

	const modalContent = document.getElementById('chatbot-modal-main-content');

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
		sendQuestion(content, threadID, company)
			.then((response) => {
				if (response !== undefined) {
					setMessages(
						response.sort(
							(a: Message, b: Message) => a.created_at - b.created_at,
						),
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

	useEffect(() => {
		modalContent?.scrollTo({
			top: modalContent.scrollHeight,
			behavior: 'smooth',
		});
	}, [messages, modalContent]);

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
			<form onSubmit={handleQuerySubmit} id="chatbot-form">
				<div className="border-persian-green-500 flex justify-between gap-2 rounded-lg border-2 p-1 shadow-xl">
					<Input
						id="chatbot-input"
						type="text"
						name="content"
						label={translations.chatbot.input.placeholder}
						displayLabel={false}
						placeholder={translations.chatbot.input.placeholder}
						value={content}
						setValue={(e) => setContent(e.target.value)}
						onKeyDown={handleKeyPress}
						disabled={isLoading}
						showBorder={false}
						className="flex-1"
					/>
					<Button
						type="submit"
						disabled={disabled}
						ariaLabel={translations.chatbot.button.submit}
					>
						<div className="flex items-center gap-1">
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
