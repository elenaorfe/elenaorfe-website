import React, { useEffect } from 'react';

interface NotificationProps {
	children: React.ReactElement;
	onClose: () => void;
	autoCloseTimeout?: number;
}

const Notification = ({
	children,
	onClose,
	autoCloseTimeout = 3000,
}: NotificationProps): JSX.Element => {
	useEffect(() => {
		const timer = setTimeout(() => {
			onClose();
		}, autoCloseTimeout);

		return () => {
			clearTimeout(timer);
		};
	}, [onClose, autoCloseTimeout]);

	return (
		<div className="fixed right-4 top-4 rounded-md bg-white p-4 shadow-md">
			{children}
		</div>
	);
};

export default Notification;
