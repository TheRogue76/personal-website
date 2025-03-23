export interface HeaderData {
  title: string;
  lang: string;
  description: string;
}

export interface HeroData {
  title: string;
  name: string;
  subtitle: string;
  cta: string;
}

export interface AboutData {
  img: string;
  paragraphOne: string;
  paragraphTwo: string;
  resume: string;
}

export interface ProjectData {
  id: string;
  img: string;
  title: string;
  info: string;
  info2: string;
  url?: string;
  repo?: string;
}

export interface ContactData {
  cta: string;
  btn: string;
  email: string;
}

export interface Network {
  id: string;
  name: string;
  url: string;
}

export interface FooterData {
  networks: Network[];
}

export interface AppContext {
  hero: HeroData;
  // about: AboutData;
  projects: ProjectData[];
  contact: ContactData;
  footer: FooterData;
}
