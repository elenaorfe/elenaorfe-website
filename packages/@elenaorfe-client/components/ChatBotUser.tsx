import Image from 'next/image';
import avatarPic from '../public/assets/img/avatar.png';
import { Translations } from '../types/common';

const ChatBotUser = ({
	role,
	translations,
}: {
	role: 'assistant' | 'user';
	translations: Translations;
}): JSX.Element => {
	const isAssistant = role === 'assistant';

	return (
		<div
			className={`mb-1 flex items-center text-end ${isAssistant ? '' : 'justify-end'} `}
		>
			{isAssistant && (
				<div
					className={`flex h-9 w-9 items-center rounded-full ${
						isAssistant ? 'justify-start' : 'justify-end'
					} `}
				>
					<Image src={avatarPic} alt="" width={25} height={25} />
				</div>
			)}
			<div className="text-lg font-bold">
				{!isAssistant
					? translations.chatbot.user.name
					: translations.chatbot.assistant.name}
			</div>
		</div>
	);
};

export default ChatBotUser;
