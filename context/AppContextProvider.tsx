import { useState } from 'react';
import AppContext from './AppContext';
import { Notification } from '../types/common';

const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [notifications, setNotifications] = useState<Notification[]>([]);

	return (
		<AppContext.Provider value={{ notifications, setNotifications }}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;
