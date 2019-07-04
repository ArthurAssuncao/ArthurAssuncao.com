import React from 'react';
import styled from 'styled-components';
import SocialButtons from '../../components/footer/Social';
import ResumeButton from '../../components/footer/Resume';
import Form from '../../components/footer/Form';

const Foot = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.palette.primary[1]};
  height: ${props => props.theme.sizes.footerHeight};
  color: ${props => props.theme.palette.neutral[0]};
  padding: 30px;
`;

const Footer = () => {
  return (
    <Foot className='footer' id='contact'>
      <span className='section-title'>Contact</span>
      <Form />
      <SocialButtons />
      <ResumeButton />
    </Foot>
  );
}

export default Footer;