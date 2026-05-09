import React, { useEffect, useState } from 'react';
import { Message } from '../../types/chatBot';
import { Translations } from '../../types/common';
import ChatBotUser from './ChatBotUser';

type ChatBotDialogProps = {
	id: string;
	message: Message;
	isLoading?: boolean;
	translations: Translations;
	isLastItem: boolean;
};

const ChatBotDialog = (props: ChatBotDialogProps): React.JSX.Element => {
	const { id, message, isLoading, translations, isLastItem } = props;
	const [displayText, setDisplayText] = useState<string>(
		isLastItem ? '' : message.content,
	);
	const [isTyping, setIsTyping] = useState<boolean>(true);
	const element = document.getElementById('chatbot-modal-main-content');

	useEffect(() => {
		if (isLastItem) {
			const originalText = message.content;
			let i = 0;

			const interval = setInterval(() => {
				setDisplayText(originalText.slice(0, i));
				// Scroll to the bottom of the chat after every 10 characters
				if (i % 10 === 0 && element !== null) {
					element.scrollTop = element.scrollHeight;
				}
				i++;

				if (i > originalText.length) {
					clearInterval(interval);
					setIsTyping(false);
					// Scroll to the bottom of the chat
					if (element !== null) {
						element.scrollTop = element.scrollHeight;
					}
				}
			}, 20);

			return () => clearInterval(interval);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [message.content]);

	return (
		<div
			className={`${isLastItem ? 'mb-8' : 'mb-2'} ${message.role === 'user' ? 'text-right' : 'text-left'}`}
		>
			<ChatBotUser
				isAssistant={message.role === 'assistant'}
				translations={translations}
			/>
			{(isLoading ?? false) ? (
				<div className="mx-1 flex items-center gap-2 py-2">
					<span className="flex h-2 w-2 items-center justify-center">
						<span className="bg-persian-green-500 absolute h-2 w-2 animate-ping rounded-full opacity-75"></span>
						<span className="bg-persian-green-500 relative h-2 w-2 rounded-full"></span>
					</span>
					<span className="flex h-2 w-2 items-center justify-center">
						<span className="bg-persian-green-500 absolute h-2 w-2 animate-ping rounded-full opacity-75"></span>
						<span className="bg-persian-green-500 relative h-2 w-2 rounded-full"></span>
					</span>
					<span className="flex h-2 w-2 items-center justify-center">
						<span className="bg-persian-green-500 absolute h-2 w-2 animate-ping rounded-full opacity-75"></span>
						<span className="bg-persian-green-500 relative h-2 w-2 rounded-full"></span>
					</span>
				</div>
			) : (
				<p
					className={`text-base text-slate-900 dark:text-slate-100 ${message.role === 'assistant' ? 'text-justify hyphens-auto' : ''}`}
					id={isTyping ? `${id}-loading` : id}
				>
					{displayText}
				</p>
			)}
		</div>
	);
};

export default React.memo(ChatBotDialog);
