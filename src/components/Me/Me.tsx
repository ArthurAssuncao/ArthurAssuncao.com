import React from 'react';
import MeStyle from './Me.style';

const Me = (props: any) => {
  return (
    <MeStyle imgUrl={props.imgUrl}>
      <div className='photo'></div>
      <span className='description'>{props.description}</span>
    </MeStyle>
  );
};

export default Me;
