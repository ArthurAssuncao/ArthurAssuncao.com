import React from 'react';
import styled from 'styled-components';
import Form from './form/Form'

const Foot = styled.footer`
  display: flex;
  background-color: ${props => props.theme.color.fg};
  height: ${props => props.theme.size.footerHeight};
  color: ${props => props.theme.color.pastelYellow};

  span {
    font-size: 1.5em;
    text-align: center;
    width: 100%;
  }
  > span {
    font-size: 2em;
  }
`;

const Footer = () => {
  return (
    <Foot>
      <span>Contact</span>
      <Form />
    </Foot>
  );
}

export default Footer;