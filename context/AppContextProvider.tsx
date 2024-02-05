import { useState } from 'react';
import AppContext from './AppContext';

const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}: {
	children: any;
}) => {
	const [errorMessage, setErrorMessage] = useState<string | undefined>(
		undefined
	);

	return (
		<AppContext.Provider value={{ errorMessage, setErrorMessage }}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;
