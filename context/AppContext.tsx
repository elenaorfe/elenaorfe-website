import React, { Dispatch, SetStateAction } from 'react';

interface AppContextProps {
	errorMessage: string | undefined;
	setErrorMessage: Dispatch<SetStateAction<string | undefined>>;
}

const appContextDefaultValue: AppContextProps = {
	errorMessage: undefined,
	setErrorMessage: (value: SetStateAction<string | undefined>) => value,
};

const AppContext = React.createContext<AppContextProps>(appContextDefaultValue);

export default AppContext;
