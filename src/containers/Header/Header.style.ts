import styled from 'styled-components';

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.palette.primary};
  box-shadow: 0 0 5px 0 ${(props) => props.theme.palette.grayscale.darkened};
  position: fixed;
  z-index: 11;
  width: 99.5vw;
  height: ${(props) => props.theme.sizes.headerHeight};
`;

export default HeaderStyle;
