interface ErrorMessageProps {
	text: string;
	fullWidth: boolean;
}

const ErrorMessage = ({ text, fullWidth }: ErrorMessageProps): JSX.Element => {
	return (
		<div className={`flex gap-2 items-start ${fullWidth ? '' : 'max-w-sm'}`}>
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
