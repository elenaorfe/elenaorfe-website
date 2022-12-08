type TitleProps = {
	text: string;
};

const Title = ({ text }: TitleProps) => {
	return <h1 className="text-xl mb-4">{text}</h1>;
};

export default Title;
