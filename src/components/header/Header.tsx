import React from 'react';
import Nav from './nav/Nav';
import styled from 'styled-components';

const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 50px;
  background-color: ${props => props.theme.color.primary};
  box-shadow: 0 0 5px 0 ${props => props.theme.color.shadow};
  position: fixed;
  z-index: 11;
  width: 100%;
  height: ${props => props.theme.size.headerHeight};
`;

const Header = () => {
  return (
    <Head className='header'>
      <Nav />
    </Head>
  );
}

export default Header;