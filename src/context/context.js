import React, { useState, useContext } from 'react';
import {
  linksData,
  storiesData,
  featureCardsData,
  socialsData,
  footerLinksData,
  pricingCardsData,
  compareFeaturesData,
} from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [links, setLinks] = useState(linksData);
  const [stories, setStories] = useState(storiesData);
  const [featureCards, setFeatureCards] = useState(featureCardsData);
  const [socials, setSocials] = useState(socialsData);
  const [footerLinks, setFooterLinks] = useState(footerLinksData);
  const [priceCards, setPriceCards] = useState(pricingCardsData);
  const [showYearlyPrice, setShowYearlyPrice] = useState(false);
  const [compareFeatures, setCompareFeatures] = useState(compareFeaturesData);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <AppContext.Provider
      value={{
        scrollToTop,
        links,
        stories,
        featureCards,
        socials,
        footerLinks,
        priceCards,
        showYearlyPrice,
        setShowYearlyPrice,
        compareFeatures,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
