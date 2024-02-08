import { useContext, useMemo, useState } from 'react';
import ChatBotConversation from './ChatBotConversation';
import { createThread } from '../utils/openAI';
import AppContext from '../context/AppContext';
import chatbotData from '../data/chatbot';
import { useRouter } from 'next/router';
import { Lang } from '../types/common';

const ChatBot = (): JSX.Element => {
	const [showConversation, setShowConversation] = useState(false);
	const [threadID, setThreadID] = useState<string | undefined>(undefined);
	const [loading, setLoading] = useState(false);
	const { setErrorMessage } = useContext(AppContext);
	const { locale } = useRouter();
	const currentLocale: Lang = useMemo(() => locale as Lang, [locale]);

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
				setErrorMessage(chatbotData[currentLocale]?.error.generic);
				closeModal();
				setThreadID(undefined);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<div className="fixed bottom-4 right-4">
			{!showConversation && (
				<button
					onClick={toggleConversation}
					className="fixed bottom-4 right-2 chip chip-primary shadow flex items-center gap-4"
				>
					{loading ? (
						<span className="text-lg">
							{chatbotData[currentLocale]?.button.loading}
						</span>
					) : (
						<>
							<span className="text-lg">
								{chatbotData[currentLocale]?.button.start}
							</span>
							<ion-icon
								name="chatbubbles"
								aria-label="chat-bot"
								size="large"
							></ion-icon>
						</>
					)}
				</button>
			)}
			{showConversation && threadID !== undefined && (
				<ChatBotConversation threadID={threadID} handleClose={closeModal} />
			)}
		</div>
	);
};

export default ChatBot;
