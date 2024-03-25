import React from 'react';

interface ShapeCircleProps {
	children: React.ReactNode;
}

const ShapeCircle: React.FC<ShapeCircleProps> = ({ children }) => (
	<div className="flex">
		<div className="bg-persian-green-500 my-auto h-8 w-8 items-center justify-center rounded-full lg:h-12 lg:w-12">
			{children}
		</div>
	</div>
);

export default ShapeCircle;
