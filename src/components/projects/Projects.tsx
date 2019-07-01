import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import Project from './Project';

const SectionCarousel = styled.section`
  background-color: ${props => props.theme.color.pastelYellow};
  li {
    background-color: ${props => props.theme.color.pastelYellow} !important;
  }
`;

const Projects = () => {
  return (
    <SectionCarousel id="projects">
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        showArrows={true}
        infiniteLoop
        useKeyboardArrows
        autoPlay={true}
        transitionTime={300}
        emulateTouch
        centerMode={true}
        centerSlidePercentage={30}
      >
        <Project />
        <Project />
        <Project />
      </Carousel>
    </SectionCarousel>
  );
}

export default Projects;