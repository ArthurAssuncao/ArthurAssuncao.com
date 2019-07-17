import React from 'react';
import AboutMeStyle from './AboutMe.style';
import Me from '../../components/Me';
import imgMe from '../../assets/images/me256x256.png';

const description = `Hi, I am Professor of Computing at IF Sudeste MG, located in Brazil, and Master in Computer Science. I am currently studying React and Front End in general and Ruby on Rails.
I participated in Hackathons, as the 2nd Hackathon of the Rede Globo and Google Developer Groups Sudeste BH 2015. This last we won!
Still, I was an organizer and mentor in the Hackathon IF Inteligente 2019 of the IF Sudeste MG.`;

const AboutMe = () => {
  return (
    <AboutMeStyle id='about-me'>
      <Me imgUrl={imgMe} description={description} />

    </AboutMeStyle>
  );
};

export default AboutMe;

/*
About Me
Hi, I am Professor of Computing at IF Sudeste MG, located in Brazil, and Master in Computer Science. I am currently studying React and Front End in general and Ruby on Rails.
I participated in Hackathons, as the 2nd Hackathon of the Rede Globo and Google Developer Groups Sudeste BH 2015. This last we won \o/

Education
Mestrado em Ciência da Computação
Universidade Federal de Ouro Preto (UFOP)
2014 - 2016
Superior de Tecnologia em Sistemas para Internet
Instituto Federal do Sudeste de Minas Gerais (IFSEMG)
2011 - 2014

Scientific production
Produções

My skills include
More confortable
HTML5
CSS3
JS
Git
linux

Confortable
React
Typescript
Python
Trello
NPM and Yarn

Less Confortable
Ruby on Rails
TDD (Jest, RSpec)
*/
