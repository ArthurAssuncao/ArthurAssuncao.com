import React from 'react';
import PropTypes from 'prop-types';
import Item from './index.style'

const howDoItemDefaultProps = {
  childrenPosition: "last"
}

const howDoItemPropTypes = {
  children: PropTypes.element,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  childrenPosition: PropTypes.string
}

type InferPropTypes<
    PropTypes,
    DefaultProps = {},
    Props = PropTypes.InferProps<PropTypes>
  > = {
    [Key in keyof Props]: Key extends keyof DefaultProps
      ? Props[Key] | DefaultProps[Key]
      : Props[Key]
}

type HowDoItemProps = InferPropTypes<typeof howDoItemPropTypes, typeof howDoItemDefaultProps>;

const HowDoItem = (props: HowDoItemProps) => {
  return (
    <Item>
      { (props.childrenPosition === "first") ? props.children : '' }
      <div>
        <h1>
          { props.title }
        </h1>
        <span className='how-do-item-description'>
          { props.description }
        </span>
      </div>
      { (props.childrenPosition === "last") ? props.children : '' }
    </Item>
  );
}

HowDoItem.defaultProps = howDoItemDefaultProps;

export default HowDoItem;