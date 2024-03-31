type MessageContentText = {
	value: string;
	annotations?: any[];
};

type MessageContent = {
	type?: string;
	text: MessageContentText;
};

export type Role = 'user' | 'assistant';

export type Message = {
	assistant_id?: string;
	content: MessageContent[];
	created_at: number;
	file_ids?: string[];
	id?: string;
	metadata?: any;
	object?: string;
	role: Role;
	run_id?: string;
	thread_id?: string;
};

export type Thread = {
	id: string;
	created_at: number;
};

export type Run = {
	id: string;
	status: string;
};
