import React from 'react';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '~/context/context';

import {heroData, projectsData, contactData, footerData, aboutData} from '~/data/data';
import About from "~/Home/About/About";

export function Home() {
  return (
    <PortfolioProvider
      value={{
        projects: [...projectsData],
        hero: { ...heroData },
        contact: { ...contactData },
        about: { ...aboutData },
        footer: { ...footerData },
      }}
    >
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}
