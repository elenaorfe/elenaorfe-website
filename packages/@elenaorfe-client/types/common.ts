export enum Lang {
	en = 'en',
	es = 'es',
}

export enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
}

export enum MessageType {
	SUCCESS = 'SUCCESS',
	ERROR = 'ERROR',
}

export interface Icon {
	name: string;
	label: string;
}

export interface Period {
	startDate: string;
	endDate: string | null;
}

export interface Skill {
	id: string;
	name: string;
	type: string;
	interest: string;
}

export interface Translations {
	[key: string]: any;
}

export interface Notification {
	message: string;
	type: MessageType;
}
