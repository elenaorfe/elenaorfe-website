interface BaseTextProps {
	text: string;
	style?: string;
}

const BaseText: React.FC<BaseTextProps> = ({ text, style }) => {
	return (
		<span
			className={`text-base print:text-[0.625rem] print:leading-3 ${
				style ?? ''
			}`}
		>
			{text}
		</span>
	);
};

export default BaseText;
