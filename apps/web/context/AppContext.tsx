import React, { Dispatch, SetStateAction } from 'react';
import { Notification } from '../types/common';

type AppContextProps = {
	notifications: Notification[];
	setNotifications: Dispatch<SetStateAction<Notification[]>>;
};

const appContextDefaultValue: AppContextProps = {
	notifications: [],
	setNotifications: (value: SetStateAction<Notification[]>) => value,
};

const AppContext = React.createContext<AppContextProps>(appContextDefaultValue);

export default AppContext;
