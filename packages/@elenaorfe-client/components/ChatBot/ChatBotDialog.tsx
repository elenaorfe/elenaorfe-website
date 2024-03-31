import React, { useEffect, useState } from 'react';
import { Message } from '../../types/chatBot';
import { Translations } from '../../types/common';
import { removeSourceReferences } from '../../utils/openAI';
import ChatBotUser from './ChatBotUser';

type ChatBotDialogProps = {
	id: string;
	message: Message;
	isLoading?: boolean;
	translations: Translations;
	isLastItem: boolean;
};

const ChatBotDialog = (props: ChatBotDialogProps): React.JSX.Element => {
	const {
		id,
		message: { role, content },
		isLoading,
		translations,
		isLastItem,
	} = props;
	const [displayText, setDisplayText] = useState<string>(
		isLastItem ? '' : removeSourceReferences(content[0].text.value),
	);
	const [isTyping, setIsTyping] = useState<boolean>(true);
	const element = document.getElementById('chatbot-modal-main-content');

	useEffect(() => {
		if (isLastItem) {
			const originalText = removeSourceReferences(content[0].text.value);
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
	}, [content]);

	return (
		<div
			className={`${isLastItem ? 'mb-8' : 'mb-2'} ${role === 'user' ? 'text-right' : 'text-left'}`}
		>
			<ChatBotUser
				isAssistant={role === 'assistant'}
				translations={translations}
			/>
			{isLoading ?? false ? (
				<div className="flex gap-2 py-2">
					<span className="bg-persian-green-500/75 h-1 w-1 animate-ping rounded-full"></span>
					<span className="bg-persian-green-500/75 h-1 w-1 animate-ping rounded-full"></span>
					<span className="bg-persian-green-500/75 h-1 w-1 animate-ping rounded-full"></span>
				</div>
			) : (
				<p
					className={`text-base text-slate-900 dark:text-slate-100 ${role === 'assistant' ? 'hyphens-auto text-justify' : ''}`}
					id={isTyping ? `${id}-loading` : id}
				>
					{displayText}
				</p>
			)}
		</div>
	);
};

export default React.memo(ChatBotDialog);
