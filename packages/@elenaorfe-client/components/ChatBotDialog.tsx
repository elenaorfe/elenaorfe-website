import { useMemo } from 'react';
import { Message } from '../types/chatBot';
import { Translations } from '../types/common';
import { removeSourceReferences } from '../utils/openAI';
import ChatBotUser from './ChatBotUser';

interface ChatBotDialogProps {
	id: string;
	message: Message;
	isLoading?: boolean;
	translations: Translations;
}

const ChatBotDialog = ({
	id,
	message,
	isLoading,
	translations,
}: ChatBotDialogProps): JSX.Element => {
	const { role, content } = message;
	const displayText = useMemo(
		() => removeSourceReferences(content[0].text.value),
		[content],
	);
	return (
		<div className={`mb-2 ${role === 'user' ? 'text-right' : 'text-left'}`}>
			<ChatBotUser role={role} translations={translations} />
			{isLoading ?? false ? (
				<div className="flex gap-2 py-2">
					<span className="bg-persian-green-500/75 h-1 w-1 animate-ping rounded-full"></span>
					<span className="bg-persian-green-500/75 h-1 w-1 animate-ping rounded-full"></span>
					<span className="bg-persian-green-500/75 h-1 w-1 animate-ping rounded-full"></span>
				</div>
			) : (
				<div className="text-base text-slate-900 dark:text-slate-100" id={id}>
					{displayText}
				</div>
			)}
		</div>
	);
};

export default ChatBotDialog;
