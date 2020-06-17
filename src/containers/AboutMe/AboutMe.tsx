import React from 'react';
import imgMe from '../../assets/images/me256x256.png';
import Me from '../../components/Me';
import AboutMeStyle from './AboutMe.style';
import Education from './Education';
import ScientificProduction from './ScientificProduction';
import Skills from './Skills';

const description = `Hi, I am Professor of Computing at IF Sudeste MG, located in Brazil, and Master in Computer Science. I am currently studying ReactJS and Front End technologies in general and NodeJS, both using Typescript.
I participated in Hackathons, as the 2nd Hackathon by Rede Globo and Google Developer Groups Sudeste BH 2015. This last, we won!
Still, I was organizer and mentor in the Hackathon IF Inteligente 2019 of IF Sudeste MG.`;

const AboutMe = () => {
  return (
    <AboutMeStyle id="aboutme">
      <div className="aboutme-me">
        <Me imgUrl={imgMe} description={description} />
      </div>
      <div className="aboutme-education-production">
        <Education />
        <ScientificProduction />
      </div>
      <Skills />
    </AboutMeStyle>
  );
};

export default AboutMe;
