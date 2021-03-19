import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link as Top } from 'react-scroll';
import { Link } from 'gatsby';
import PortfolioContext from '../../context/context';
import GithubButtons from '../GithubButtons/GithubButtons';

import { githubButtons } from '../../mock/data';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  const { isEnabled } = githubButtons;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Top to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Top>
        </span>
        <div>
          <Link strict to="/termos-de-uso">
            Termos de uso
          </Link>
        </div>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a key={id} href={url} rel="noopener noreferrer" target="_blank" aria-label={name}>
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">
          Copyright © Érida Psicologia {new Date().getFullYear()}. Todos os direitos reservados.
          Criado por{' '}
          <a href="https://eupoiese.com" target="_blank" rel="noopener noreferrer">
            Eupoiese LTDA.
          </a>
        </p>
        {isEnabled && <GithubButtons />}
      </Container>
    </footer>
  );
};

export default Footer;
