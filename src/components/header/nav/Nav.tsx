import React from 'react';
import styled from 'styled-components';
import { FaBriefcase, FaCode, FaIdCardAlt } from 'react-icons/fa';

const NavInternal = styled.nav`
  display: flex;
  height: ${props => props.theme.size.headerHeight};
  font-family: ${props => props.theme.font.family};
  position: relative;
  width: 100%;
`;

const List = styled.ul`
  display: flex;
  width: 450px;
  right: 0px;
  position: absolute;
  height: ${props => props.theme.size.headerHeight};
  vertical-align: middle;
  font-size: 20px;
  color: ${props => props.theme.color.pastelYellow};
  padding-right: 50px;

  li{
    flex: 1;
    height: ${props => props.theme.size.headerHeight};
    padding: 0px 15px 0 15px;
    transition: background-color .3s ease-out;
    letter-spacing: 2px;
    font-weight: 400;
    line-height: ${props => props.theme.size.headerHeight};

    .icon {
      margin-bottom: -2px;
    }

    &:hover {
        cursor: pointer;
        color: ${props => props.theme.color.primaryLighted2};
        background-color: ${props => props.theme.color.primaryDarkened2};
    }
  }
`;

const LogoSpan = styled.span`
  line-height: ${props => props.theme.size.headerHeight};
  font-size: 50px;
  padding: 0;
  letter-spacing: 7px;
  color: ${props => props.theme.color.pastelYellow};
`;

const Nav = () => {
  return (
    <NavInternal>
      <LogoSpan>Arthur Assunção</LogoSpan>
      <List>
        <li><a href="#job"><FaBriefcase className="icon" /> My Job</a></li>
        <li><a href="#projects"><FaCode className="icon" /> Projects</a></li>
        <li><a href="#contact"><FaIdCardAlt className="icon" /> Contact</a></li>
      </List>
    </NavInternal>
  );
}

export default Nav;