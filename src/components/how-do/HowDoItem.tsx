import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Item = styled.div`
  min-height: 500px;
  max-width: 76vw;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  background-color: ${props => props.theme.palette.neutral[0]};
  line-height: 20px;

  .how-do-item-description {
    max-width: 200px;
  }

  h1 {
    font-size: 2em;
    line-height: 2em;
  }

  svg {
    font-size: 300px;
    padding: 0 20px;
  }
`;

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