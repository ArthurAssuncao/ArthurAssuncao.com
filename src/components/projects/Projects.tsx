import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import Project from './Project';
import imgGloboHistorias from '../../assets/images/projects/globo-historias/thumbnail.jpg'

const SectionCarousel = styled.section`
  background-color: ${props => props.theme.color.pastelYellow};
  padding: 100px 0;
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
        autoPlay={false}
        transitionTime={300}
        emulateTouch
        centerMode={true}
        centerSlidePercentage={30}
      >
        <Project
          name={'Globo Histórias'}
          imgUrl={imgGloboHistorias}
          description={`Protótipo de Hackathon participante do Hackathon da Globo 2016.

          O app permite que pessoas de qualquer lugar, em qualquer momento, possam contar suas experiências, histórias para a Globo e a Globo, após moderação, pode incluir essas histórias em notícias relacionadas. Melhorando a experiência de que lê notícia em seus portais, além de aumentar a divulgação das notícias ao permitir que as pessoas que contaram suas histórias compartilhem links de notícias onde, ao final do texto, sua história está contada em vídeo.`}
          url={'https://github.com/ArthurAssuncao/globo-historias'}
        />
        <Project />
        <Project />
      </Carousel>
    </SectionCarousel>
  );
}

export default Projects;