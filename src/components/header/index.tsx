import React from 'react';
import Nav from './nav';
import styled from 'styled-components';

const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 50px;
  background-color: ${props => props.theme.palette.primary[0]};
  box-shadow: 0 0 5px 0 ${props => props.theme.palette.grayscale[1]};
  position: fixed;
  z-index: 11;
  width: 100%;
  height: ${props => props.theme.sizes.headerHeight};
`;

const Header = () => {
  return (
    <Head className='header'>
      <Nav />
    </Head>
  );
}

export default Header;