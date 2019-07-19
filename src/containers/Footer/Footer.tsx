import React from 'react';
import SocialBar from '../../components/SocialBar';
import ResumeButton from '../../components/ResumeButton';
import Form from '../../components/Form';
import FooterStyle from './Footer.style';
import PropTypes from 'prop-types';
import { InferPropTypes } from '../../types';

const footerDefaultProps = {

};

const footerPropTypes = {
  className: PropTypes.string.isRequired,
  sectionClassName: PropTypes.string.isRequired
};

type FooterProps = InferPropTypes<typeof footerPropTypes, typeof footerDefaultProps>;

const Footer = (props: FooterProps) => {
  return (
    <FooterStyle className={props.className} id='contact'>
      <span className={props.sectionClassName}>Contact</span>
      <Form />
      <SocialBar />
      <ResumeButton />
    </FooterStyle>
  );
};

Footer.defaultProps = footerDefaultProps;

export default Footer;
