import React from 'react';
import SocialButtonStyle from './SocialButton.style';
import PropTypes from 'prop-types';
import { InferPropTypes } from '../../../types';

const socialButtonDefaultProps = {

};

const socialButtonPropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  perfilUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

type SocialButtonProps = InferPropTypes<typeof socialButtonPropTypes, typeof socialButtonDefaultProps>;

const SocialButton = (props: SocialButtonProps) => {
  return (
    <SocialButtonStyle>
      <a href={props.perfilUrl} className='social-link' >
        {props.children}
        <span className='social-name'> {props.name} </span>
      </a>
    </SocialButtonStyle>
  );
};

SocialButton.defaultProps = socialButtonDefaultProps;

export default SocialButton;
