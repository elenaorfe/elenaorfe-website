export type Role = 'user' | 'assistant';

export type Message = {
	id: string;
	role: Role;
	content: string;
};

export type Thread = {
	id: string;
	created_at: number;
};

export type Run = {
	id: string;
	status: string;
};
