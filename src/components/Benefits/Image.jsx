import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ProjectImg from '../Image/ProjectImg';

const Image = ({ img, title }) => {
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
    <Col lg={7} sm={12}>
      <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
        <div className="benefit-wrapper__image">
          <Tilt
            options={{
              reverse: false,
              max: 8,
              perspective: 1000,
              scale: 1,
              speed: 300,
              transition: true,
              axis: null,
              reset: true,
              easing: 'cubic-bezier(.03,.98,.52,.99)',
            }}
          >
            <div data-tilt className="thumbnail rounded">
              <ProjectImg alt={title} filename={img} />
            </div>
          </Tilt>
        </div>
      </Fade>
    </Col>
  );
};

Image.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Image;
