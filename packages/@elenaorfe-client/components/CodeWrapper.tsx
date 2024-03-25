import React from 'react';

interface CodeWrapperProps {
	children: React.ReactNode;
	fileName: string;
}

const CodeWrapper: React.FC<CodeWrapperProps> = ({ children, fileName }) => {
	return (
		<div className="rounded-xl bg-[--color-background] shadow-xl ring-1 ring-[--color-text-inverted]">
			<div className="flex w-full items-center border-b-2 border-[--color-text-inverted] p-2">
				<div className="flex space-x-1">
					<div className="h-2 w-2 rounded-full bg-[#FF5653]"></div>
					<div className="h-2 w-2 rounded-full bg-[#FEBE0D]"></div>
					<div className="h-2 w-2 rounded-full bg-[#2CCD34]"></div>
				</div>
				<div className="flex-1 text-center text-xs">{fileName}</div>
			</div>
			<div className="p-2">{children}</div>
		</div>
	);
};

export default CodeWrapper;
