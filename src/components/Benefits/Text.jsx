import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Text = ({ side, info, title }) => {
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
    <Col lg={4} sm={12}>
      <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
        <div className={`benefit-wrapper__text benefits-${side}`}>
          <h1 className={`benefit-wrapper__text-title benefits-${side}`}>{title}</h1>
          <div>
            <p>{info}</p>
          </div>
        </div>
      </Fade>
    </Col>
  );
};

Text.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  side: PropTypes.string.isRequired,
};

export default Text;
