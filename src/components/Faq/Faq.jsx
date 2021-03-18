import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const FAQ = () => {
  const { faq } = useContext(PortfolioContext);

  return (
    <section id="faq">
      <Container>
        <Title title="FAQ (Perguntas Frequentes)" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {faq.map((question) => {
                const { id, q, a } = question;
                return (
                  <div key={id}>
                    <i />
                    <h3>{q}</h3>
                    <p>{a}</p>
                  </div>
                );
              })}
            </p>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default FAQ;
