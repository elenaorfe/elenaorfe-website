class ProjectItem {
  id: string;
  title: string;
  description: string;
  skills: string[];
  url: string;

  constructor(id: string, title: string, description: string, skills: string[], url: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.skills = skills;
    this.url = url;
  }
}

class Project {
  en: ProjectItem;
  es: ProjectItem;
  
  constructor(en: ProjectItem, es: ProjectItem) {
    this.en = en;
    this.es = es;
  }
}

export { Project, ProjectItem };