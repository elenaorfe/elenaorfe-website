class About {
  title: string;
  contact: Contact[];

  constructor(title: string, contact: Contact[]) {
    this.title = title;
    this.contact = contact;
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

export { About };