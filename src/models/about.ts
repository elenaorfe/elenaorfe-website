class AboutItem {
  name: string; 
  role: string; 
  description: string[]; 
  contact: Contact[];

  constructor(name: string, role: string, description: string[], contact: Contact[]) {
    this.name = name;
    this.role = role;
    this.description = description;
    this.contact = contact;
  }
}

class About {
  en: AboutItem;
  es: AboutItem;

  constructor(en: AboutItem, es: AboutItem) {
    this.en = en;
    this.es = es;
  }
}

class Contact {
  name: string;
  img: string;
  url: string;

  constructor(name: string, img: string, url: string) {
    this.name = name;
    this.img = img;
    this.url = url;
  }
}

export { About, AboutItem };