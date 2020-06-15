import styled from 'styled-components';

const HR = styled.hr`
  /* color: ${(props) => props.theme.palette.neutral[1]};
  background-color: ${(props) => props.theme.palette.neutral[1]};
  border-color: ${(props) => props.theme.palette.neutral[1]}; */
  border: 0.1px dashed ${(props) => props.theme.palette.grayscale.lightened};
  width: calc(100vw - 60px);
`;

export default HR;
