import React, { useContext, useState } from 'react';
import ChatBotConversation from './ChatBotConversation';
import { createThread } from '../utils/openAI';
import AppContext from '../context/AppContext';
import Spinner from './Spinner';

interface ChatBotProps {
	translations: any;
}

const ChatBot: React.FC<ChatBotProps> = ({ translations }) => {
	const [showConversation, setShowConversation] = useState(false);
	const [threadID, setThreadID] = useState<string | undefined>(undefined);
	const [loading, setLoading] = useState(false);
	const { setErrorMessage } = useContext(AppContext);

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
				setErrorMessage(translations.chatbot.error.generic);
				closeModal();
				setThreadID(undefined);
			})
			.finally(() => {
				setLoading(false);
			});
	};

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
						>
							<ion-icon
								name="chatbubbles"
								aria-label="chat-bot"
								size="large"
								title={translations.chatbot.icon.placeholder}
							></ion-icon>
						</button>
						<div className="flex absolute h-2 w-2 top-0 right-0">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
						</div>
					</div>
				))}
			{showConversation && threadID !== undefined && (
				<ChatBotConversation
					threadID={threadID}
					handleClose={closeModal}
					translations={translations}
				/>
			)}
		</>
	);
};

export default ChatBot;
