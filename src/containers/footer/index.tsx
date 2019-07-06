import React from 'react';
import SocialBar from '../../components/social-bar';
import ResumeButton from '../../components/resume-button';
import Form from '../../components/form';
import FooterStyle from './index.style';

const Footer = () => {
  return (
    <FooterStyle className='footer' id='contact'>
      <span className='section-title'>Contact</span>
      <Form />
      <SocialBar />
      <ResumeButton />
    </FooterStyle>
  );
}

export default Footer;
