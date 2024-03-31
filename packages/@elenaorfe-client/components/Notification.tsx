import React, { useEffect } from 'react';

type NotificationProps = {
	children: React.ReactElement;
	onClose: () => void;
	autoCloseTimeout?: number;
};

const Notification = (props: NotificationProps): React.JSX.Element => {
	const { children, onClose, autoCloseTimeout = 3000 } = props;

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
