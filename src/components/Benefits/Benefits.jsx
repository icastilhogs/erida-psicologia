import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Text from './Text';
import Image from './Image';

const Benefits = () => {
  const { benefits } = useContext(PortfolioContext);

  return (
    <section id="benefits">
      <Container>
        <div className="benefit-wrapper">
          {benefits.map((benefit) => {
            const { title, info, side, img, id } = benefit;
            if (side === 'left') {
              return (
                <Row key={id}>
                  <Text side={side} info={info} title={title} />
                  <Image title={title} img={img} />
                </Row>
              );
            }
            return (
              <Row key={id}>
                <Image title={title} img={img} />
                <Text side={side} info={info} title={title} />
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Benefits;
