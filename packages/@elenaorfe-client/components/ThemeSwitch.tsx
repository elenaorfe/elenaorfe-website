import { Icon } from '@iconify/react';
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContextProvider';
import { Theme } from '../types/common';

const ThemeSwitch: React.FC = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<div>
			<button
				type="button"
				role="switch"
				aria-checked="true"
				id="display-switch"
				className="bg-persian-green-500 relative flex rounded-full p-1"
				onClick={toggleTheme}
				aria-label="Toggle theme"
				tabIndex={0}
			>
				<Icon
					icon="iconamoon:mode-light"
					width={24}
					height={24}
					className={theme === Theme.LIGHT ? 'scale-0' : 'opacity-0'}
				/>
				<Icon
					icon="iconamoon:mode-dark"
					width={24}
					height={24}
					className={`ml-2 ${theme === Theme.LIGHT ? 'opacity-0' : 'scale-0'}`}
				/>
				<span
					className={`absolute flex h-6 w-6 items-center justify-center rounded-full bg-white transition duration-500  ${theme === Theme.LIGHT ? 'translate-x-0' : 'translate-x-[2rem]'}`}
				>
					<Icon
						icon="iconamoon:mode-light-fill"
						width={24}
						height={24}
						className={
							theme === Theme.LIGHT
								? 'text-persian-green-500 flex-none p-1'
								: 'scale-0'
						}
					/>
					<Icon
						icon="iconamoon:mode-dark-fill"
						width={24}
						height={24}
						className={
							theme === Theme.LIGHT
								? 'scale-0'
								: 'text-persian-green-500 flex-none p-1'
						}
					/>
				</span>
			</button>

			<label htmlFor="display-switch" className="sr-only">
				{theme === Theme.LIGHT ? 'Enable dark mode' : 'Disable dark mode'}
			</label>
		</div>
	);
};

export default ThemeSwitch;
