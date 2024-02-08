import Image from 'next/image';
import styles from '../styles/ChatBotUser.module.css';
import avatarPic from '../public/assets/img/avatar.png';
import chatbotData from '../data/chatbot';
import { useRouter } from 'next/router';
import { Lang } from '../types/common';
import { useMemo } from 'react';

const ChatBotUser = ({ role }: { role: 'assistant' | 'user' }): JSX.Element => {
	const isAssistant = role === 'assistant';
	const { locale } = useRouter();
	const currentLocale: Lang = useMemo(() => locale as Lang, [locale]);

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
					? chatbotData[currentLocale]?.user.name
					: chatbotData[currentLocale]?.assistant.name}
			</div>
		</div>
	);
};

export default ChatBotUser;
