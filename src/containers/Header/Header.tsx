import React from 'react';
import Nav from '../../components/Nav';
import HeaderStyle from './Header.style';
import PropTypes from 'prop-types';
import { InferPropTypes } from '../../types';

const headerDefaultProps = {

};

const headerPropTypes = {
  className: PropTypes.string.isRequired
};

type HeaderProps = InferPropTypes<typeof headerPropTypes, typeof headerDefaultProps>;

const Header = (props: HeaderProps) => {
  return (
    <HeaderStyle className={props.className}>
      <Nav />
    </HeaderStyle>
  );
};

Header.defaultProps = headerDefaultProps;

export default Header;
