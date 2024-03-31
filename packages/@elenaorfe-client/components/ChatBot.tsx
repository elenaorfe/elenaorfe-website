import { Icon } from '@iconify/react';
import React, { useContext, useMemo, useState } from 'react';
import AppContext from '../context/AppContext';
import { Message } from '../types/chatBot';
import { MessageType, Translations } from '../types/common';
import { createThread } from '../utils/openAI';
import ChatBotConversation from './ChatBotConversation';
import ChatBotInput from './ChatBotInput';
import Modal from './Modal';
import Spinner from './Spinner';

interface ChatBotProps {
	translations: Translations;
	showIndicator?: boolean;
}

const ChatBot: React.FC<ChatBotProps> = ({
	translations,
	showIndicator = true,
}) => {
	const [showConversation, setShowConversation] = useState(false);
	const [threadID, setThreadID] = useState<string | undefined>(undefined);
	const [messages, setMessages] = useState<Message[]>([]);
	const [loading, setLoading] = useState(false);
	const { setNotifications } = useContext(AppContext);

	const toggleConversation = (): void => {
		if (threadID === undefined) {
			setLoading(true);
			handleCreateOpenAIThread();
		} else {
			openModal();
		}
	};

	const openModal = (): void => {
		setShowConversation(true);
	};

	const closeModal = (): void => {
		setShowConversation(false);
	};

	const handleCreateOpenAIThread = (): void => {
		createThread()
			.then((response) => {
				setThreadID(response?.id);
				openModal();
			})
			.catch(() => {
				setNotifications([
					{
						message: translations.chatbot.error.generic,
						type: MessageType.ERROR,
					},
				]);
				closeModal();
				setThreadID(undefined);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const memoizedComponent = useMemo(
		() => (
			<ChatBotInput
				messages={messages}
				setMessages={setMessages}
				threadID={threadID !== undefined ? threadID : ''}
				translations={translations}
			/>
		),
		[messages, threadID, translations],
	);

	return (
		<>
			{!showConversation &&
				(loading ? (
					<Spinner />
				) : (
					<div className="relative inline-flex">
						<button
							type="button"
							onClick={toggleConversation}
							className="flex items-center gap-4"
							aria-label={translations.chatbot.icon.placeholder}
							title={translations.chatbot.icon.placeholder}
							id="chatbot-open-button"
						>
							<Icon icon="mage:message-conversation" width={32} height={32} />
						</button>
						{showIndicator && (
							<div className="absolute right-0 top-0 z-0 flex h-2 w-2">
								<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
								<span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
							</div>
						)}
					</div>
				))}
			{showConversation && threadID !== undefined && (
				<Modal
					id="chatbot-modal"
					ariaLabel="Chatbot conversation"
					isOpen={true}
					onClose={closeModal}
					mainContent={() => (
						<ChatBotConversation
							messages={messages}
							translations={translations}
						/>
					)}
					footerContent={() => memoizedComponent}
					isFullScreen={true}
				/>
			)}
		</>
	);
};

export default ChatBot;
