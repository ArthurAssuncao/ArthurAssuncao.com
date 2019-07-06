import styled from 'styled-components';

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.palette.primary[1]};
  height: ${props => props.theme.sizes.footerHeight};
  color: ${props => props.theme.palette.neutral[0]};
  padding: 30px;
`;

export default FooterStyle;
