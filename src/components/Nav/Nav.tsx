import React from 'react';
import { FaBriefcase, FaCode, FaIdCardAlt } from 'react-icons/fa';
import { NavStyle, LogoSpan, List, ListItem } from './Nav.style';

const Nav = () => {
  return (
    <NavStyle>
      <LogoSpan><a className='nav-link' href='/' aria-label='Arthur Assuncao'>Arthur<span className='nav-lastName'> Assunção</span></a></LogoSpan>
      <List>
        <ListItem url='#job' text='My Job'><FaBriefcase /></ListItem>
        <ListItem url='#projects' text='Projects'><FaCode /></ListItem>
        <ListItem url='#contact' text='Contact'><FaIdCardAlt /></ListItem>
      </List>
    </NavStyle>
  );
};

export default Nav;
