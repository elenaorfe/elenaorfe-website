interface ErrorMessageProps {
	text: string;
}

const ErrorMessage = ({ text }: ErrorMessageProps): JSX.Element => {
	return (
		<div className="flex gap-2 items-start max-w-sm">
			<div className="text-red-500">
				<ion-icon
					name="alert-circle-outline"
					aria-label="close-chat"
				></ion-icon>
			</div>
			<span className="text-red-500 leading-5">{text}</span>
		</div>
	);
};

export default ErrorMessage;
