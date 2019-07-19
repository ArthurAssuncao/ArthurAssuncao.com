import React from 'react';
import PropTypes from 'prop-types';
import HowDoItemStyle from './HowDoItem.style';
import { InferPropTypes } from '../../types';

const howDoItemDefaultProps = {
  childrenPosition: 'last'
};

const howDoItemPropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  childrenPosition: PropTypes.string
};

type HowDoItemProps = InferPropTypes<typeof howDoItemPropTypes, typeof howDoItemDefaultProps>;

const HowDoItem = (props: HowDoItemProps) => {
  return (
    <HowDoItemStyle>
      {(props.childrenPosition === 'first') ? <div className='img-container'>{props.children}</div> : ''}
      <div>
        <h1 className='howDoItem-title'>
          {props.title}
        </h1>
        <span className='howDoItem-description'>
          {props.description}
        </span>
      </div>
      {(props.childrenPosition === 'last') ? <div className='img-container'>{props.children}</div> : ''}
    </HowDoItemStyle >
  );
};

HowDoItem.defaultProps = howDoItemDefaultProps;

export default HowDoItem;
