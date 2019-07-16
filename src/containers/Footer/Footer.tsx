import React from 'react';
import SocialBar from '../../components/SocialBar';
import ResumeButton from '../../components/ResumeButton';
import Form from '../../components/Form';
import FooterStyle from './Footer.style';

const Footer = (props: any) => {
  return (
    <FooterStyle className={props.className} id='contact'>
      <span className={props.sectionClassName}>Contact</span>
      <Form />
      <SocialBar />
      <ResumeButton />
    </FooterStyle>
  );
};

export default Footer;
