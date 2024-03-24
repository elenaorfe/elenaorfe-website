export interface Feedback {
	id: string;
	author: FeedbackAuthor;
	date: string;
	comment: string;
}

interface FeedbackAuthor {
	name: string;
	company: string;
	role: string;
}
