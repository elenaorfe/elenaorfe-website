import { Message } from '../types/chatBot';
import ChatBotUser from './ChatBotUser';

interface ChatBotDialogProps {
	message: Message;
	isLoading?: boolean;
}

const ChatBotDialog = ({
	message,
	isLoading,
}: ChatBotDialogProps): JSX.Element => {
	const { role, content } = message;

	return (
		<div className={`mb-2 ${role === 'user' ? 'text-right' : 'text-left'}`}>
			<ChatBotUser role={role} />
			{isLoading ?? false ? (
				<div className="flex gap-2 pt-2">
					<span className="animate-ping h-1 w-1 rounded-full bg-teal-500 opacity-75"></span>
					<span className="animate-ping h-1 w-1 rounded-full bg-teal-500 opacity-75"></span>
					<span className="animate-ping h-1 w-1 rounded-full bg-teal-500 opacity-75"></span>
				</div>
			) : (
				<div className="text-gray-500">{content[0].text.value}</div>
			)}
		</div>
	);
};

export default ChatBotDialog;