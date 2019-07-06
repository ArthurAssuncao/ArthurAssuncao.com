import React from 'react';
import Nav from '../../components/Nav';
import HeaderStyle from './index.style';

const Header = () => {
  return (
    <HeaderStyle className='header'>
      <Nav />
    </HeaderStyle>
  );
}

export default Header;
