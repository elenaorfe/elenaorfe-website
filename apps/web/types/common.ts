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

export type Icon = {
	name: string;
	label: string;
};

export type Period = {
	startDate: string;
	endDate: string | null;
};

export type Skill = {
	id: string;
	name: string;
	type: string;
	interest: string;
};

export type Translations = {
	[key: string]: any;
};

export type Notification = {
	message: string;
	type: MessageType;
};
