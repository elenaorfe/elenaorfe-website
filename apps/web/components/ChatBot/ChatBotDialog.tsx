import React, { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
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
			className={`${isLastItem ? 'mb-8' : 'mb-2'} flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
		>
			<div
				className={`flex flex-col ${message.role === 'user' ? 'items-end' : 'items-start'}`}
			>
				{message.role === 'assistant' && (
					<ChatBotUser translations={translations} />
				)}
				{(isLoading ?? false) ? (
					<div
						className={`mx-1 flex items-center gap-2 rounded-lg px-4 py-2 ${message.role === 'assistant' ? '' : 'bg-pbg-slate-200 dark:bg-slate-700'}`}
					>
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
					<div
						className={`rounded-lg py-2 text-base ${
							message.role === 'assistant'
								? 'hyphens-auto'
								: 'bg-slate-100 px-4 text-slate-900 dark:bg-slate-700 dark:text-slate-100'
						}`}
						id={isTyping ? `${id}-loading` : id}
					>
						<Markdown remarkPlugins={[remarkGfm]}>{displayText}</Markdown>
					</div>
				)}
			</div>
		</div>
	);
};

export default React.memo(ChatBotDialog);
