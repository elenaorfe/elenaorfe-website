interface TitleProps {
	text: string;
}

const Title = ({ text }: TitleProps): JSX.Element => {
	return <h1 className="mb-4 text-xl">{text}</h1>;
};

export default Title;
