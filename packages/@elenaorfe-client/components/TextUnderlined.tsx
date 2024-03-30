import React from 'react';

interface TextUnderlinedProps {
	children: React.ReactNode;
	id: string;
}

const TextUnderlined: React.FC<TextUnderlinedProps> = ({ id, children }) => {
	const [showUnderline, setShowUnderline] = React.useState(false);

	// Show underline when element appears in the viewport
	React.useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setShowUnderline(entry.isIntersecting);
			},
			{ rootMargin: '-50px', threshold: 1 },
		);

		observer.observe(document.getElementById(id) as HTMLElement);

		return () => {
			observer.disconnect();
		};
	}, [id]);

	return (
		<span
			id={id}
			className={`after:bg-persian-green-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-[width] after:ease-in after:content-[''] ${showUnderline ? 'after:w-full' : 'after:w-0'}`}
		>
			{children}
		</span>
	);
};
export default TextUnderlined;
