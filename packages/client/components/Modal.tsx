import React from 'react';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	isFullScreen?: boolean;
	mainContent: React.FC;
	footerContent?: React.FC;
}

const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	isFullScreen = false,
	mainContent: MainContent,
	footerContent: FooterContent,
}) => {
	if (!isOpen) return null;

	return (
		<div className="modal">
			<div className={`modal_content ${isFullScreen ? 'h-[95%]' : ''}`}>
				<div className="modal_header">
					<button className={'btn_close'} onClick={onClose}>
						<ion-icon
							name="close-outline"
							aria-label="close-chat"
							size="large"
						></ion-icon>
					</button>
				</div>
				<div className="modal_main">
					<MainContent />
				</div>
				<div className="modal_footer">
					{FooterContent !== undefined && <FooterContent />}
				</div>
			</div>
		</div>
	);
};

export default Modal;
