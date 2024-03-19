import React, { useContext, useMemo, useState } from 'react';
import { Icon } from '@iconify/react';
import ChatBotConversation from './ChatBotConversation';
import { createThread } from '../utils/openAI';
import AppContext from '../context/AppContext';
import Spinner from './Spinner';
import ChatBotInput from './ChatBotInput';
import Modal from './Modal';
import { Message } from '../types/chatBot';
import { MessageType, Translations } from '../types/common';

interface ChatBotProps {
	translations: Translations;
}

const ChatBot: React.FC<ChatBotProps> = ({ translations }) => {
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
		document.body.style.overflow = 'hidden'; // Prevent scrolling
	};

	const closeModal = (): void => {
		setShowConversation(false);
		document.body.style.overflow = ''; // Allow scrolling
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
		[messages, threadID, translations]
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
						>
							<Icon icon="mage:message-conversation" width={32} height={32} />
						</button>
						<div className="flex absolute h-2 w-2 top-0 right-0 z-0">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
						</div>
					</div>
				))}
			{showConversation && threadID !== undefined && (
				<Modal
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
