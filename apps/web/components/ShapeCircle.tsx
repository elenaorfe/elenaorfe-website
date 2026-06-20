import React from 'react';

type ShapeCircleProps = {
	children: React.ReactNode;
};

const ShapeCircle = (props: ShapeCircleProps): React.JSX.Element => {
	const { children } = props;

	return (
		<div className="flex">
			<div className="bg-persian-green-500 my-auto flex h-8 w-8 items-center justify-center rounded-full lg:h-12 lg:w-12">
				{children}
			</div>
		</div>
	);
};

export default ShapeCircle;
