import { Icon } from '@iconify/react';
import React, { useCallback, useEffect, useState } from 'react';

type ModalProps = {
	id: string;
	isOpen: boolean;
	onClose: () => void;
	isFullScreen?: boolean;
	mainContent: React.FC;
	footerContent?: React.FC;
	ariaLabel: string;
};

const Modal = (props: ModalProps): React.JSX.Element => {
	const {
		id,
		isOpen,
		onClose,
		isFullScreen = false,
		mainContent: MainContent,
		footerContent: FooterContent,
		ariaLabel,
	} = props;
	const [otherFocusableElements, setOtherFocusableElements] = useState<
		Element[]
	>([]);

	useEffect(() => {
		const modal = document.getElementById(id);
		const allFocusable = Array.from(
			document?.querySelectorAll(`body *:not(#${id}`),
		).filter((element) => {
			return (
				(element as HTMLElement).tabIndex > -1 ||
				(element.getAttribute('tabindex') !== null &&
					parseInt(element.getAttribute('tabindex') as string, 10) > -1) ||
				element.nodeName === 'BUTTON' ||
				element.nodeName === 'INPUT'
			);
		});
		const focusableOutsideModal = Array.from(allFocusable).filter(
			(element) => modal !== null && !modal.contains(element),
		);
		setOtherFocusableElements(focusableOutsideModal);
	}, [id]);

	const disableBackgroundTabNavigationAndScroll = useCallback((): void => {
		otherFocusableElements.forEach(function (element) {
			element.setAttribute('tabindex', '-1');
		});
		document.body.style.overflow = 'hidden';
	}, [otherFocusableElements]);

	const restoreBackgroundTabNavigationAndScroll = useCallback((): void => {
		otherFocusableElements.forEach(function (element) {
			element.removeAttribute('tabindex');
		});
		document.body.style.overflow = '';
	}, [otherFocusableElements]);

	const handleOnClose = (): void => {
		restoreBackgroundTabNavigationAndScroll();
		onClose();
	};

	useEffect(() => {
		if (isOpen) {
			disableBackgroundTabNavigationAndScroll();
		}
	}, [isOpen, disableBackgroundTabNavigationAndScroll]);

	if (!isOpen) {
		return <React.Fragment />;
	}

	return (
		<div className="fixed left-0 top-0 z-20 flex h-full w-full items-center justify-center bg-slate-900/40 dark:bg-slate-600/40">
			<div
				className={`flex w-[95%] max-w-[800px] flex-col rounded-lg bg-white p-4 md:p-8 text-slate-900 shadow-lg dark:bg-slate-900 dark:text-slate-100 ${isFullScreen ? 'h-[95%]' : ''}`}
				role="dialog"
				aria-modal="true"
				aria-label={ariaLabel}
				id={id}
			>
				<div className="flex-none text-end">
					<button onClick={handleOnClose} aria-label="Close chat">
						<Icon icon="mage:multiply" width={24} height={24} />
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
