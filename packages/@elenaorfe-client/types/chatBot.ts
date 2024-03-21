interface MessageContentText {
	value: string;
	annotations?: any[];
}

interface MessageContent {
	type?: string;
	text: MessageContentText;
}

export type Role = 'user' | 'assistant';

export interface Message {
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
}

export interface Thread {
	id: string;
	created_at: number;
}

export interface Run {
	id: string;
	status: string;
}
