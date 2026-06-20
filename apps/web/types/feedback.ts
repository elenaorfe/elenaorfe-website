export type Feedback = {
	id: string;
	author: FeedbackAuthor;
	date: string;
	comment: string;
};

type FeedbackAuthor = {
	name: string;
	company: string;
	role: string;
};
