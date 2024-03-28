import { Icon } from '@iconify/react';
import React from 'react';

interface ModalProps {
	id: string;
	isOpen: boolean;
	onClose: () => void;
	isFullScreen?: boolean;
	mainContent: React.FC;
	footerContent?: React.FC;
}

const Modal: React.FC<ModalProps> = ({
	id,
	isOpen,
	onClose,
	isFullScreen = false,
	mainContent: MainContent,
	footerContent: FooterContent,
}) => {
	if (!isOpen) return null;

	return (
		<div className="fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-slate-900/40">
			<div
				className={`flex w-full max-w-[800px] flex-col rounded-lg bg-white p-8 text-slate-900 dark:bg-slate-900 dark:text-slate-100 ${isFullScreen ? 'h-[95%]' : ''}`}
			>
				<div className="flex-none text-end">
					<button onClick={onClose} aria-label="Close chat">
						<Icon icon="mage:multiply" width={32} height={32} />
					</button>
				</div>
				<div
					className="flex flex-1 flex-col overflow-y-auto"
					id={`${id}-main-content`}
				>
					<MainContent />
				</div>
				<div className="flex-none text-end">
					{FooterContent !== undefined && <FooterContent />}
				</div>
			</div>
		</div>
	);
};

export default Modal;
