import React from 'react';
import { FaBriefcase, FaCode, FaIdCardAlt } from 'react-icons/fa';
import { NavStyle, LogoSpan, List } from './Nav.style';

const Nav = () => {
  return (
    <NavStyle>
      <LogoSpan>Arthur Assunção</LogoSpan>
      <List>
        <li><a href="#job"><FaBriefcase className="icon" /> My Job</a></li>
        <li><a href="#projects"><FaCode className="icon" /> Projects</a></li>
        <li><a href="#contact"><FaIdCardAlt className="icon" /> Contact</a></li>
      </List>
    </NavStyle>
  );
}

export default Nav;
