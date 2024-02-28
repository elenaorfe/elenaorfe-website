import Image from 'next/image';
import styles from '../styles/ChatBotUser.module.css';
import avatarPic from '../public/assets/img/avatar.png';

const ChatBotUser = ({
	role,
	translations,
}: {
	role: 'assistant' | 'user';
	translations: any;
}): JSX.Element => {
	const isAssistant = role === 'assistant';

	return (
		<div
			className={`${styles.user_profile} ${isAssistant ? '' : 'justify-end'} `}
		>
			{isAssistant && (
				<div
					className={`${styles.user_picture} ${
						isAssistant ? 'justify-start' : 'justify-end'
					} `}
				>
					<Image src={avatarPic} alt="" width={25} height={25} />
				</div>
			)}
			<div className={styles.user_name}>
				{!isAssistant
					? translations.chatbot.user.name
					: translations.chatbot.assistant.name}
			</div>
		</div>
	);
};

export default ChatBotUser;
