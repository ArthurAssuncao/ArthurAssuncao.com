import styled from 'styled-components';

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.palette.primary};
  box-shadow: 0 0 5px 0 ${(props) => props.theme.palette.grayscale.darkened};
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 11;
  width: 100%;
  height: ${(props) => props.theme.sizes.headerHeight};
`;

export default HeaderStyle;
