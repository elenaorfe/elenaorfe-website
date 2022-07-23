interface Project {
	id: string;
	duration: string;
	title: string;
	location: string;
	description: string;
	role: string;
	skills: string[];
}

export interface WorkExperience {
	id: string;
	name: string;
	description: string;
	dateStart: string;
	dateEnd: string;
	logo: string;
	color: string;
	projects: Project[];
}
