export interface WorkExperience {
  id: string;
  name:string;
  description: string;
  dateStart: string;
  dateEnd: string;
  logo: string;
  color: string;
  projects: Project[];
}

interface Project {
  id: string;
  duration: string;
  title: string;
  location: string;
  description: string;
  skills: string[];
}
