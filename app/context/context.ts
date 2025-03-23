import React from 'react';
import type {AppContext} from '~/interfaces';
import {aboutData, contactData, footerData, heroData, projectsData} from '~/data/data';

const PortfolioContext = React.createContext<AppContext>({
  contact: { ...contactData },
  about: { ...aboutData },
  footer: { ...footerData },
  hero: { ...heroData },
  projects: [...projectsData],
});

export const PortfolioProvider = PortfolioContext.Provider;
export const PortfolioConsumer = PortfolioContext.Consumer;

export default PortfolioContext;
