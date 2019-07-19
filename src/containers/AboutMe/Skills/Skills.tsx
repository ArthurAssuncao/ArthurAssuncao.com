import React from 'react';
import {
  FaPython, FaReact, FaJsSquare, FaGithub, FaHtml5, FaCss3Alt, FaTrello, FaLinux, FaYarn,
  FaNpm, FaGitSquare, FaNode, FaSass, FaRegCircle
} from 'react-icons/fa';
import { DiPostgresql, DiScrum, DiTerminal, DiMongodb, DiResponsive } from 'react-icons/di';
import { GoRuby } from 'react-icons/go';
import SkillsStyle from './Skills.style';
import SkillGroup from './SkillGroup';
import Skill from '../../../components/Skill';
import { TypescriptIcon, JestIcon } from '../../../components/Icons';

const Skills = () => {
  return (
    <SkillsStyle>
      <h2 className='skills-title'>My Skills include:</h2>
      <div className='skills-group'>
        <SkillGroup type="more-confortable">
          <Skill name='HTML 5'><FaHtml5 /></Skill>
          <Skill name='CSS3'><FaCss3Alt /></Skill>
          <Skill name='JavaScript'><FaJsSquare /></Skill>
          <Skill name='Github'><FaGithub /></Skill >
          <Skill name='Git'><FaGitSquare /></Skill >
          <Skill name='Responsive'><DiResponsive /></Skill >
          <Skill name='SASS'><FaSass /></Skill >
          <Skill name='Linux'><FaLinux /></Skill >
          <Skill name='Terminal'><DiTerminal /></Skill >
        </SkillGroup>

        <SkillGroup type="confortable">
          <Skill name='Python'><FaPython /></Skill>
          <Skill name='Trello'><FaTrello /></Skill>
          <Skill name='NPM'><FaNpm /></Skill >
          <Skill name='Yarn'><FaYarn /></Skill >
        </SkillGroup>

        <SkillGroup type="less-confortable">
          <Skill name='ReactJS'><FaReact /></Skill>
          <Skill name='Typescript'><TypescriptIcon /></Skill>
          <Skill name='TDD with Jest'><JestIcon /></Skill>
          <Skill name='Ruby on Rails'><GoRuby /></Skill>
          <Skill name='NodeJS'><FaNode /></Skill >
          <Skill name='Circle CI'><FaRegCircle /></Skill>
          <Skill name='MongoDB'><DiMongodb /></Skill>
          <Skill name='Scrum'><DiScrum /></Skill>
          <Skill name='PostgreSQL'><DiPostgresql /></Skill>
        </SkillGroup>
      </div>
    </SkillsStyle>
  );
};

export default Skills;
