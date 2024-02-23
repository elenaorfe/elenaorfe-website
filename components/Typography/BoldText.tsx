interface BoldTextProps {
	text: string;
	style?: string;
}

const BoldText: React.FC<BoldTextProps> = ({ text, style }) => {
	return (
		<strong
			className={`text-base print:text-[0.625rem] print:leading-3 ${
				style ?? ''
			}`}
		>
			{text}
		</strong>
	);
};

export default BoldText;
