import React from 'react';
import { Message } from '../types/chatBot';
import { Translations } from '../types/common';
import ChatBotDialog from './ChatBotDialog';

interface ChatBotConversationProps {
	messages: Message[];
	translations: Translations;
}

const ChatBotConversation: React.FC<ChatBotConversationProps> = (props) => {
	const { messages, translations } = props;

	const introMessage: Message = {
		role: 'assistant',
		content: [
			{
				type: 'text',
				text: {
					value: translations.chatbot.assistant.intro,
				},
			},
		],
		created_at: new Date().getTime(),
	};

	return (
		<React.Fragment>
			<ChatBotDialog
				id="chatbot-message-0"
				message={introMessage}
				translations={translations}
			/>
			{messages?.map((message, index: number) => (
				<ChatBotDialog
					id={`chatbot-message-${index + 1}`}
					message={message}
					key={`message-${index}`}
					isLoading={message.content[0].text.value === ''}
					translations={translations}
				/>
			))}
		</React.Fragment>
	);
};

export default ChatBotConversation;
