import React, { useState } from 'react';
import { Notification } from '../types/common';
import AppContext from './AppContext';

type AppContextProviderProps = {
	children: React.ReactNode;
};

const AppContextProvider = (
	props: AppContextProviderProps,
): React.JSX.Element => {
	const { children } = props;
	const [notifications, setNotifications] = useState<Notification[]>([]);

	return (
		<AppContext.Provider value={{ notifications, setNotifications }}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;
