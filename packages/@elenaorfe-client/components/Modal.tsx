import { Icon } from '@iconify/react';
import React, { useEffect, useRef } from 'react';
import Button from './Button';
import Title from './Title';

type ModalProps = {
	id: string;
	isOpen: boolean;
	onClose: () => void;
	isFullScreen?: boolean;
	title?: string;
	mainContent: React.FC;
	footerContent?: React.FC;
	ariaLabel: string;
	closeButtonAriaLabel: string;
};

const Modal = (props: ModalProps): React.JSX.Element => {
	const {
		id,
		isOpen,
		onClose,
		isFullScreen = false,
		title,
		mainContent: MainContent,
		footerContent: FooterContent,
		ariaLabel,
		closeButtonAriaLabel,
	} = props;
	const overlayRef = useRef<HTMLDivElement>(null);
	const modalRef = useRef<HTMLDivElement>(null);
	const lastFocusedElementRef = useRef<Element | null>(null);

	// Lock body scroll
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
			lastFocusedElementRef.current = document.activeElement;
		} else {
			document.body.style.overflow = '';
			if (lastFocusedElementRef.current instanceof HTMLElement) {
				lastFocusedElementRef.current.focus();
			}
		}
	}, [isOpen]);

	// Focus trap
	useEffect(() => {
		if (!isOpen) return;

		const modal = modalRef.current;
		const focusable = modal?.querySelectorAll<HTMLElement>(
			'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])',
		);

		focusable?.[0]?.focus();

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose();
			}

			if (e.key === 'Tab' && focusable) {
				const firstElement = focusable[0];
				const lastElement = focusable[focusable.length - 1];

				if (e.shiftKey) {
					// Shift + Tab
					if (document.activeElement === firstElement) {
						e.preventDefault();
						lastElement.focus();
					}
				} else {
					// Tab
					if (document.activeElement === lastElement) {
						e.preventDefault();
						firstElement.focus();
					}
				}
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [isOpen, onClose]);

	if (!isOpen) {
		return <React.Fragment />;
	}

	return (
		<div
			className="fixed left-0 top-0 z-20 flex h-full w-full items-center justify-center bg-slate-900/40 dark:bg-slate-600/40"
			ref={overlayRef}
			onClick={(e) => e.target === overlayRef.current && onClose()}
			aria-hidden={!isOpen}
		>
			<div
				className={`flex w-[95%] max-w-[800px] flex-col rounded-lg bg-white p-4 text-slate-900 shadow-lg md:p-8 dark:bg-slate-900 dark:text-slate-100 ${isFullScreen ? 'h-[95%]' : ''}`}
				ref={modalRef}
				role="dialog"
				aria-modal="true"
				aria-label={ariaLabel}
				id={id}
			>
				<div className={title ? 'my-auto flex justify-between' : ''}>
					{title && <Title text={title} />}
					<div className="flex-none text-end">
						<Button
							type="button"
							onClick={onClose}
							ariaLabel={closeButtonAriaLabel}
						>
							<Icon icon="mage:multiply" width={24} height={24} />
						</Button>
					</div>
				</div>
				<div id={`${id}-main-content`}>
					<MainContent />
				</div>
				<div>{FooterContent !== undefined && <FooterContent />}</div>
			</div>
		</div>
	);
};

export default Modal;
