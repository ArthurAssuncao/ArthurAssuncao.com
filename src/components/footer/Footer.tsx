import React from 'react';
import styled from 'styled-components';
import Form from './form/Form';
import SocialButtons from './social/SocialButtons';
import ResumeButton from './resume/ResumeButton';

const Foot = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.color.fg};
  height: ${props => props.theme.size.footerHeight};
  color: ${props => props.theme.color.pastelYellow};
  padding: 30px;

  .contact-text {
    font-size: 2em;
    text-align: center;
    margin: 10px 0;
  }
`;

const Footer = () => {
  return (
    <Foot className='footer' id='contact'>
      <span className='contact-text'>Contact</span>
      <Form />
      <SocialButtons />
      <ResumeButton />
    </Foot>
  );
}

export default Footer;