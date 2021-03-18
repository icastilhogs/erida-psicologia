import React, { useState, useEffect } from 'react';
// import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';

import { footerData } from '../mock/data';
import '../style/main.scss';

import { PortfolioProvider } from '../context/context';
import Terms from '../components/Terms/Terms';
import Footer from '../components/Footer/Footer';

export default () => {
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setFooter({ ...footerData });
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Termos de uso</title>
        <html lang="pt-br" />
        <meta name="description" content="Termos de uso" />
      </Helmet>

      <PortfolioProvider value={{ footer }}>
        <Terms />
        <Footer />
      </PortfolioProvider>
    </>
  );
};
