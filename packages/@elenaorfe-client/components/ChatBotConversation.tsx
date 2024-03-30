import React, { useMemo } from 'react';
import { Message } from '../types/chatBot';
import { Translations } from '../types/common';
import ChatBotDialog from './ChatBotDialog';

interface ChatBotConversationProps {
	messages: Message[];
	translations: Translations;
}

const ChatBotConversation: React.FC<ChatBotConversationProps> = (props) => {
	const { messages, translations } = props;
	const isIntroMessageLastItem = useMemo(
		() => messages.length === 0,
		[messages],
	);

	const introMessage: Message = useMemo(
		() => ({
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
		}),
		[translations.chatbot.assistant.intro],
	);

	return (
		<React.Fragment>
			<ChatBotDialog
				id="chatbot-message-0"
				message={introMessage}
				translations={translations}
				isLastItem={isIntroMessageLastItem}
			/>
			{messages?.map((message, index: number) => (
				<ChatBotDialog
					id={`chatbot-message-${index + 1}`}
					message={message}
					key={`message-${index}`}
					isLoading={message.content[0].text.value === ''}
					translations={translations}
					isLastItem={index === messages.length - 1}
				/>
			))}
		</React.Fragment>
	);
};

export default React.memo(ChatBotConversation);
