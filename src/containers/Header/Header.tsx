import React from 'react';
import Nav from '../../components/Nav';
import HeaderStyle from './Header.style';

const Header = (props: any) => {
  return (
    <HeaderStyle className={props.className}>
      <Nav />
    </HeaderStyle>
  );
};

export default Header;
