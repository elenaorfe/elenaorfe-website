interface Heading1Props {
	text: string;
	style?: string;
}

const Heading1: React.FC<Heading1Props> = ({ text, style }) => {
	return (
		<h1 className={`text-lg print:text-sm my-auto ${style ?? ''}`}>{text}</h1>
	);
};

export default Heading1;
