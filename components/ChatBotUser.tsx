import Image from 'next/image';
import styles from '../styles/ChatBotUser.module.css';
import avatarPic from '../public/assets/img/avatar.png';

const ChatBotUser = ({ role }: { role: 'assistant' | 'user' }): JSX.Element => {
	const isAssistant = role === 'assistant';

	return (
		<div
			className={`${styles.user_profile} ${!isAssistant ? 'justify-end' : ''} `}
		>
			<div className={styles.user_picture}>
				{isAssistant ? (
					<Image src={avatarPic} alt="" width={25} height={25} />
				) : (
					<ion-icon name="person-outline" />
				)}
			</div>
			<div className={styles.user_name}>
				{!isAssistant ? 'Visitor' : 'Elena'}
			</div>
		</div>
	);
};

export default ChatBotUser;
