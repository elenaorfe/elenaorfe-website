import React, { useEffect, useRef } from 'react';

interface TextUnderlinedProps {
	children: React.ReactNode;
	id: string;
}

const TextUnderlined: React.FC<TextUnderlinedProps> = ({ id, children }) => {
	const [showUnderline, setShowUnderline] = React.useState(false);
	const elementRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		// Show underline when element is in the 20% of the viewport
		const handleScroll = (): void => {
			const element = elementRef.current;
			if (element !== null) {
				const elementTop = element.getBoundingClientRect().top;
				const viewportHeight = window.innerHeight;
				const threshold = viewportHeight * 0.2;

				if (elementTop < viewportHeight - threshold) {
					setShowUnderline(true);
				} else if (elementTop > viewportHeight) {
					setShowUnderline(false);
				}
			}
		};

		window.addEventListener('scroll', handleScroll);

		// Initial check when component mounts
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<span
			ref={elementRef}
			className={`after:bg-persian-green-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-[width] after:ease-in after:content-[''] ${showUnderline ? 'after:w-full' : 'after:w-0'}`}
		>
			{children}
		</span>
	);
};
export default TextUnderlined;
