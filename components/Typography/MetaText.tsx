interface MetaTextProps {
	text: string;
	style?: string;
}

const MetaText: React.FC<MetaTextProps> = ({ text, style }) => {
	return (
		<span
			className={`text-xs text-gray-400 print:text-[0.5rem] print:leading-3 ${
				style ?? ''
			}`}
		>
			{text}
		</span>
	);
};

export default MetaText;
