import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';

const Clients = () => {
  const { clients } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="clients">
      <Container id="clients-container">
        <Title title="Para quem é a terapia?" />
        <Row>
          {clients.map((client) => {
            const { title, text } = client;
            return (
              <Col>
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={800}
                  distance="30px"
                >
                  <h3>{title}</h3>
                  <p className="contact-wrapper__text">{text}</p>
                </Fade>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Clients;
