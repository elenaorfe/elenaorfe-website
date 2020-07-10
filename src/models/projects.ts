class Project {
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

export { Project };