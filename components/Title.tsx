interface TitleProps {
	text: string;
}

const Title = ({ text }: TitleProps): JSX.Element => {
	return <h1 className="text-xl mb-4">{text}</h1>;
};

export default Title;
