import React from 'react';
import AboutMeStyle from './AboutMe.style';
import Me from '../../components/Me';
import Skills from './Skills';
import Education from './Education';
import ScientificProduction from './ScientificProduction';

import imgMe from '../../assets/images/me256x256.png';

const description = `Hi, I am Professor of Computing at IF Sudeste MG, located in Brazil, and Master in Computer Science. I am currently studying React and Front End in general and Ruby on Rails.
I participated in Hackathons, as the 2nd Hackathon of the Rede Globo and Google Developer Groups Sudeste BH 2015. This last we won!
Still, I was an organizer and mentor in the Hackathon IF Inteligente 2019 of the IF Sudeste MG.`;

const AboutMe = () => {
  return (
    <AboutMeStyle id='aboutme'>
      <div className='aboutme-me'><Me imgUrl={imgMe} description={description} /></div>
      <div className='aboutme-education-production'>
        <Education />
        <ScientificProduction />
      </div>
      <Skills />
    </AboutMeStyle>
  );
};

export default AboutMe;
