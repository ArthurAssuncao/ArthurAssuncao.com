import React from 'react';
import SocialButtonStyle from './SocialButton.style';

const SocialButton = (props: any) => {
  return (
    <SocialButtonStyle>
      <a href={props.perfilUrl} className='social-link' >
        {props.children}
        <span className='social-name'> {props.name} </span>
      </a>
    </SocialButtonStyle>
  );
};

export default SocialButton;
