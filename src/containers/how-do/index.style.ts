import styled from 'styled-components';

const HowDoStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  top: ${props => props.theme.sizes.headerHeight};
  padding-bottom: ${props => props.theme.sizes.headerHeight};
  background-color: ${props => props.theme.palette.neutral[0]};
`;

export default HowDoStyle;