import styled from 'styled-components';

const HeaderStyle = styled.header`
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

export default HeaderStyle;