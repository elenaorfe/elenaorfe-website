import Image from 'next/image';
import React from 'react';
import avatarPic from '../../public/assets/img/avatar.png';
import { Translations } from '../../types/common';

type ChatBotUserProps = {
	translations: Translations;
};

const ChatBotUser = (props: ChatBotUserProps): React.JSX.Element => {
	const { translations } = props;
	return (
		<div className="mb-1 flex items-center text-end">
			<div className="flex h-9 w-9 items-center justify-start rounded-full">
				<Image
					src={avatarPic}
					alt="Elena Ortega's smiling cartoon avatar with glasses"
					width={25}
					height={25}
				/>
			</div>

			<div className="text-lg font-semibold">
				{translations.chatbot.assistant.name}
			</div>
		</div>
	);
};

export default React.memo(ChatBotUser);
