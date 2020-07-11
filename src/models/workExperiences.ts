class WorkExperienceItem {
  name: string;
  description: string;
  dateStart: string;
  dateEnd: string;
  projects: Project[];

  constructor(name: string, description: string, dateStart: string, dateEnd: string, projects: Project[]) {
    this.name = name;
    this.description = description;
    this.dateStart = dateStart;
    this.dateEnd = dateEnd;
    this.projects = projects;
  }
}

class WorkExperience {
  en: WorkExperienceItem;
  es: WorkExperienceItem;

  constructor(en: WorkExperienceItem, es: WorkExperienceItem) {
    this.en = en;
    this.es = es;
  }
}

class Project {
  duration: string;
  title: string;
  location: string;
  description: string;
  tasks: string[];
  skills: string[];

  constructor(duration: string, title: string, location: string, description: string, tasks: string[], skills: string[]) {
    this.duration = duration;
    this.title = title;
    this.location = location;
    this.description = description;
    this.tasks = tasks;
    this.skills = skills;
  }
}

export { WorkExperience, WorkExperienceItem };