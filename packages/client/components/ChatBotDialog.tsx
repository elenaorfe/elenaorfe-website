import { Message } from '../types/chatBot';
import { Translations } from '../types/common';
import ChatBotUser from './ChatBotUser';

interface ChatBotDialogProps {
	message: Message;
	isLoading?: boolean;
	translations: Translations;
}

const ChatBotDialog = ({
	message,
	isLoading,
	translations,
}: ChatBotDialogProps): JSX.Element => {
	const { role, content } = message;

	return (
		<div className={`mb-2 ${role === 'user' ? 'text-right' : 'text-left'}`}>
			<ChatBotUser role={role} translations={translations} />
			{isLoading ?? false ? (
				<div className="flex gap-2 pt-2">
					<span className="h-1 w-1 animate-ping rounded-full bg-teal-500 opacity-75"></span>
					<span className="h-1 w-1 animate-ping rounded-full bg-teal-500 opacity-75"></span>
					<span className="h-1 w-1 animate-ping rounded-full bg-teal-500 opacity-75"></span>
				</div>
			) : (
				<div className="text-base text-[--color-text-shade-01]">
					{content[0].text.value}
				</div>
			)}
		</div>
	);
};

export default ChatBotDialog;
