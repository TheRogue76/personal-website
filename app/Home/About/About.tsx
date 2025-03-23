import React, { useContext, useState, useEffect } from 'react';
import {Fade} from 'react-swift-reveal';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
// import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';
import { Element } from 'react-scroll';
// import { ResumeLink } from './ResumeLink';

const About = () => {
  const { about } = useContext(PortfolioContext);

  const { img, paragraphOne, paragraphTwo, resume } = about;

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
    <Element id="about">
      <section>
        <Container>
          <Title title="About Me" />
          <Row className="about-wrapper">
            <Col md={6} sm={12}>
              <Fade bottom duration={1000} delay={0} distance="30px">
                <div className="about-wrapper__image">
                  {/* TODO FIX THIS SHIT */}
                  <img src={img} alt="profile picture" className="rounded shadow-lg" style={{maxWidth: 400, maxHeight: 300, display: 'flex'}} />
                </div>
              </Fade>
            </Col>
            <Col md={6} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={0} distance="30px">
                <div className="about-wrapper__info">
                  <p className="about-wrapper__info-text">
                    {paragraphOne}
                  </p>
                  <p className="about-wrapper__info-text">{paragraphTwo}</p>
                  {resume && (
                    <span className="d-flex mt-3">
                      {/* TODO FIX THIS SHIT */}
                      {/*<ResumeLink filename={resume} />*/}
                    </span>
                  )}
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>
    </Element>
  );
};

export default About;
