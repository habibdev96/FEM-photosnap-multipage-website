import React, { useState, useContext } from 'react';
import { linksData, storiesData, featureCardsData } from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [links, setLinks] = useState(linksData);
  const [stories, setStories] = useState(storiesData);
  const [featureCards, setFeatureCards] = useState(featureCardsData);

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <AppContext.Provider value={{ scrollToTop, links, stories, featureCards }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
