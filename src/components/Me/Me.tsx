import React from 'react';
import MeStyle from './Me.style';
import PropTypes from 'prop-types';
import { InferPropTypes } from '../../types';

const meDefaultProps = {
};

const mePropTypes = {
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

type MeProps = InferPropTypes<typeof mePropTypes, typeof meDefaultProps>;

const Me = (props: MeProps) => {
  return (
    <MeStyle imgUrl={props.imgUrl}>
      <div className='photo'></div>
      <span className='description'>{props.description}</span>
    </MeStyle>
  );
};

Me.defaultProps = meDefaultProps;

export default Me;
