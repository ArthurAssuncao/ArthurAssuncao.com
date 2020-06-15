import React from 'react';
import {
  DiMongodb,
  DiPostgresql,
  DiResponsive,
  DiScrum,
  DiTerminal,
} from 'react-icons/di';
import {
  FaCss3Alt,
  FaGithub,
  FaGitSquare,
  FaHtml5,
  FaJsSquare,
  FaLinux,
  FaNode,
  FaNpm,
  FaPython,
  FaReact,
  FaRegCircle,
  FaSass,
  FaTrello,
  FaYarn,
} from 'react-icons/fa';
import { GoRuby } from 'react-icons/go';
import { JestIcon, TypescriptIcon } from '../../../components/Icons';
import Skill from '../../../components/Skill';
import SkillGroup from './SkillGroup';
import SkillsStyle from './Skills.style';

const Skills = () => {
  return (
    <SkillsStyle>
      <h2 className="skills-title">My Skills include:</h2>
      <div className="skills-group">
        <SkillGroup type="more-confortable">
          <Skill name="HTML 5">
            <FaHtml5 />
          </Skill>
          <Skill name="CSS3">
            <FaCss3Alt />
          </Skill>
          <Skill name="JavaScript">
            <FaJsSquare />
          </Skill>
          <Skill name="Github">
            <FaGithub />
          </Skill>
          <Skill name="Git">
            <FaGitSquare />
          </Skill>
          <Skill name="Responsive">
            <DiResponsive />
          </Skill>
          <Skill name="SASS">
            <FaSass />
          </Skill>
          <Skill name="Linux">
            <FaLinux />
          </Skill>
          <Skill name="Terminal">
            <DiTerminal />
          </Skill>
        </SkillGroup>

        <SkillGroup type="confortable">
          <Skill name="Python">
            <FaPython />
          </Skill>
          <Skill name="Trello">
            <FaTrello />
          </Skill>
          <Skill name="NPM">
            <FaNpm />
          </Skill>
          <Skill name="Yarn">
            <FaYarn />
          </Skill>
          <Skill name="ReactJS">
            <FaReact />
          </Skill>
          <Skill name="Typescript">
            <TypescriptIcon />
          </Skill>
          <Skill name="PostgreSQL">
            <DiPostgresql />
          </Skill>
          <Skill name="NodeJS">
            <FaNode />
          </Skill>
        </SkillGroup>

        <SkillGroup type="less-confortable">
          <Skill name="TDD with Jest">
            <JestIcon />
          </Skill>
          <Skill name="Ruby on Rails">
            <GoRuby />
          </Skill>
          <Skill name="Circle CI">
            <FaRegCircle />
          </Skill>
          <Skill name="MongoDB">
            <DiMongodb />
          </Skill>
          <Skill name="Scrum">
            <DiScrum />
          </Skill>
        </SkillGroup>
      </div>
    </SkillsStyle>
  );
};

export default Skills;
