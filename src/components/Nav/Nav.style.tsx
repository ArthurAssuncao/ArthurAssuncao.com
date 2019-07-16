import styled from 'styled-components';
import React from 'react';

const NavStyle = styled.nav`
  display: flex;
  height: ${props => props.theme.sizes.headerHeight};
  position: relative;
  width: 100%;
`;

const LogoSpan = styled.span`
  @media (min-width: 0px) {
    line-height: ${props => props.theme.sizes.headerHeight};
    font-size: 4rem;
    padding: 0;
    letter-spacing: 0.7rem;
    color: ${props => props.theme.palette.neutral[0]};

    .nav-lastName{
      display: none;
    }
  }

  @media (min-width: 480px) {

  }

  @media (min-width: 768px), (min-width: 768px) and (max-device-width: 480px) and (orientation: portrait) {
    .nav-lastName{
      display: inline;
    }
  }

  @media (min-width: 992px) and (orientation: landscape), (min-width: 992px) and (max-device-width: 640px) and (orientation: landscape) {

  }

  @media (min-width: 1200px) {

  }
`;

const List = styled.ul`
  @media (min-width: 0px) {
    display: flex;
    width: 45vw;
    right: 0px;
    position: absolute;
    height: ${props => props.theme.sizes.headerHeight};
    vertical-align: middle;
    font-size: 2rem;
    color: ${props => props.theme.palette.neutral[0]};
    text-align: center;
  }

  @media (min-width: 480px) {
    width: 50vw;
  }

  @media (min-width: 768px), (min-width: 768px) and (max-device-width: 480px) and (orientation: portrait) {
    width: 40vw;
    vertical-align: baseline;
  }

  @media (min-width: 992px) and (orientation: landscape), (min-width: 992px) and (max-device-width: 640px) and (orientation: landscape) {

  }

  @media (min-width: 1200px) {

  }
`;

const ListItemStyle = styled.li`
  @media (min-width: 0px) {
    flex: 1;
    height: ${props => props.theme.sizes.headerHeight};
    transition: background-color .3s ease-out;
    letter-spacing: 2px;
    font-weight: 400;
    line-height: ${props => props.theme.sizes.headerHeight};

    .icon {
      vertical-align: middle;
    }

    .text {
      display: none;
    }

    &:hover {
        cursor: pointer;
        color: ${props => props.theme.palette.secondary.lightened[1]};
        background-color: ${props => props.theme.palette.secondary.darkened[1]};
    }
  }

  @media (min-width: 480px) {

  }

  @media (min-width: 768px), (min-width: 768px) and (max-device-width: 480px) and (orientation: portrait) {

  }

  @media (min-width: 992px), (min-width: 992px) and (max-device-width: 640px) and (orientation: landscape) {
    .text {
      display: inline;
    }
  }

  @media (min-width: 1200px) {

  }
`;

const ListItem = (props: any) => {
  return (
    <ListItemStyle>
      <a href={props.url} aria-labelledby={`${props.url}_text`}>
        <span className="icon">{props.children}</span>
        <span className="text" id={`${props.url}_text`}> {props.text}</span>
      </a>
    </ListItemStyle>
  );
};

export { NavStyle, LogoSpan, List, ListItem };
export default NavStyle;
