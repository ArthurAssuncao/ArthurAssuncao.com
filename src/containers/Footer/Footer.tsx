import React from 'react';
import SocialBar from '../../components/SocialBar';
import ResumeButton from '../../components/ResumeButton';
import Form from '../../components/Form';
import FooterStyle from './Footer.style';

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
