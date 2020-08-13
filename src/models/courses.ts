class CourseItem {
  title: string;
  description: string;
  skills: string[];
  date: string;

  constructor(title: string, description: string, skills: string[], date: string) {
    this.title = title;
    this.description = description;
    this.skills = skills;
    this.date = date;
  }
}

export { CourseItem };