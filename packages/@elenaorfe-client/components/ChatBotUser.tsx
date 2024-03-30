import Image from 'next/image';
import React from 'react';
import avatarPic from '../public/assets/img/avatar.png';
import { Translations } from '../types/common';

interface ChatBotUserProps {
	isAssistant: boolean;
	translations: Translations;
}

const ChatBotUser: React.FC<ChatBotUserProps> = ({
	isAssistant,
	translations,
}) => {
	return (
		<div
			className={`mb-1 flex items-center text-end ${isAssistant ? '' : 'justify-end'} `}
		>
			{isAssistant && (
				<div className="flex h-9 w-9 items-center justify-start rounded-full">
					<Image
						src={avatarPic}
						alt="Elena Ortega's smiling cartoon avatar with glasses"
						width={25}
						height={25}
					/>
				</div>
			)}
			<div className="text-lg font-semibold">
				{isAssistant
					? translations.chatbot.assistant.name
					: translations.chatbot.user.name}
			</div>
		</div>
	);
};

export default React.memo(ChatBotUser);
