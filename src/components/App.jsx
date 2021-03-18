import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import FAQ from './Faq/Faq';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  clientData,
  aboutData,
  benefitsData,
  contactData,
  faqData,
  footerData,
} from '../mock/data';
import Clients from './Clients/Clients';

function App() {
  const [hero, setHero] = useState({});
  const [clients, setClients] = useState([]);
  const [about, setAbout] = useState({});
  const [benefits, setBenefits] = useState([]);
  const [faq, setFAQ] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setClients([...clientData]);
    setAbout({ ...aboutData });
    setBenefits([...benefitsData]);
    setFAQ([...faqData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, clients, about, benefits, contact, faq, footer }}>
      <Hero />
      <Clients />
      <About />
      <Projects />
      <FAQ />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
