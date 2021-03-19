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
          <div className="faq-wrapper">
            {faq.map((question) => {
              const { id, q, a } = question;
              return (
                <div key={id}>
                  <i />
                  <h3 className="faq-question">{q}</h3>
                  <p className="faq-asnwer">{a}</p>
                </div>
              );
            })}
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default FAQ;
