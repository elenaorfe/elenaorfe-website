import { useContext, useState } from 'react';
import ChatBotConversation from './ChatBotConversation';
import { createThread } from '../utils/openAI';
import { createThreadNotion } from '../utils/notion';
import AppContext from '../context/AppContext';
import { Thread } from '../types/chatBot';

const ChatBot = (): JSX.Element => {
	const [showConversation, setShowConversation] = useState(false);
	const [threadID, setThreadID] = useState<string | undefined>(undefined);
	const [notionThreadID, setNotionThreadID] = useState(undefined);
	const [loading, setLoading] = useState(false);
	const { setErrorMessage } = useContext(AppContext);

	const toggleConversation = (): void => {
		if (threadID === undefined) {
			setLoading(true);
			handleCreateOpenAIThread();
		} else {
			setShowConversation(true);
		}
	};

	const handleCreateOpenAIThread = (): void => {
		createThread()
			.then((response) => {
				setThreadID(response?.id);
				if (response !== undefined) {
					handleCreateNotionThread(response);
				}
			})
			.catch(() => {
				setErrorMessage('An error occurred. Please try again later.');
				setShowConversation(false);
				setLoading(false);
				setThreadID(undefined);
			});
	};

	const handleCreateNotionThread = (thread: Thread): void => {
		createThreadNotion(thread)
			.then((response) => {
				setNotionThreadID(response.properties.uid.title[0].text.content);
				setShowConversation(true);
			})
			.catch(() => {
				setErrorMessage('An error occurred. Please try again later.');
				setShowConversation(false);
				setNotionThreadID(undefined);
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
						<span className="text-lg">Loading...</span>
					) : (
						<>
							<span className="text-lg">Chat with me</span>
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
				<ChatBotConversation
					threadID={threadID}
					notionThreadID={notionThreadID}
					handleClose={() => setShowConversation(false)}
				/>
			)}
		</div>
	);
};

export default ChatBot;
