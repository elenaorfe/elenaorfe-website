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
		<div className="fixed top-4 right-4 bg-white p-4 rounded-md shadow-md">
			{children}
		</div>
	);
};

export default Notification;
