import { nanoid } from 'nanoid';
import type {
  AboutData,
  ContactData,
  FooterData,
  HeaderData,
  HeroData,
  ProjectData,
} from '~/interfaces';
import ProfilePic from '../resources/optimized/profile.webp'

// HEAD DATA
export const headData: HeaderData = {
  title: 'Parsa Nasirimehr', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my personal website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData: HeroData = {
  title: '',
  name: 'Parsa Nasirimehr',
  subtitle: "I'm a software engineer",
  cta: '',
};

// ABOUT DATA
export const aboutData: AboutData = {
  img: ProfilePic,
  paragraphOne:
    "I'm a Mobile Engineer with a focus on solutions for both iOS and Android. Experience with Swift, SwiftUI, KMP, and React Native. Current maintainer of Lottie React Native. In my free time, i do some volunteer OSS work (Mostly Lottie and React Native itself).",
  paragraphTwo: '',
  resume: 'CV.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData: ProjectData[] = [
  {
    id: nanoid(),
    img: 'mcd.webp',
    title: 'McDonalds',
    info: 'Umain',
    info2: 'The global McDonalds Mobile application',
    url: 'https://www.mcdonalds.com/us/en-us.html',
  },
  {
    id: nanoid(),
    img: 'hava.webp',
    title: 'Hava',
    info: 'Hava',
    info2: 'A health app, with a focus on Satiety per calorie and Food detection algorithms',
    url: 'https://www.hava.co/',
  },
  {
    id: nanoid(),
    img: 'dietdoctor.webp',
    title: 'DietDoctor',
    info: 'DietDoctor',
    info2: 'A Dietary app built for iOS and Android, with a focus on metabolic health.',
    url: 'https://www.dietdoctor.com/',
  },
  {
    id: nanoid(),
    img: 'appetit.png',
    title: 'Appetit',
    info: 'Appetit',
    info2:
      'A Workout app built for iOS and Android, with health tracking using Apple Healthkit and Google Fit. Made to connect coaches with their customers and to provide a platform for streaming their workouts',
    url: 'https://www.appetit.fit/',
  },
  {
    id: nanoid(),
    img: 'patogh.png',
    title: 'Patogh Social App',
    info: 'K.N.T.U University of Technology',
    info2:
      'A Social gathering coordinator app built for Android as part of my System Analysis and Design course in college',
    url: 'https://prezi.com/p/bqql2m5-pjjk/patogh/',
  },
  {
    id: nanoid(),
    img: 'xapa.png',
    title: 'Xapa',
    info: 'Xapa',
    info2: 'A crypto currency wallet app with coin exchange capabilities',
    url: 'https://xapawallet.com/',
  },
  {
    id: nanoid(),
    img: 'adobeConnect.png',
    title: 'AdobeConnectExporter',
    info: 'Open source',
    info2:
      "A fork of an adobe connect exporter written in python. Extended it's ability to include more universities and merged into the master branch",
    repo: 'https://github.com/ParsaHejabi/AdobeConnectExporter', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData: ContactData = {
  cta: '',
  btn: '',
  email: 'p.nasirimehr@gmail.com',
};

// FOOTER DATA
export const footerData: FooterData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/ParsaNasirimehr',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/parsa-nasirimehr-3547b9168/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/TheRogue76',
    },
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto:p.nasirimehr@gmail.com',
    },
  ],
};
