import React from 'react';

type CodeWrapperProps = {
	children: React.ReactNode;
	fileName: string;
	isCollapsed?: boolean;
};

const CodeWrapper = (props: CodeWrapperProps): React.JSX.Element => {
	const { children, fileName, isCollapsed = false } = props;

	return (
		<div
			className={`rounded-xl bg-white shadow-xl ring-1 ring-slate-100 dark:bg-slate-900 dark:ring-slate-700 ${isCollapsed ? 'max-h-[28rem] overflow-hidden' : ''}`}
		>
			<div className="flex w-full items-center border-b-2 border-slate-100 p-2 dark:border-slate-700">
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
