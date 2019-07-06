import styled from 'styled-components';

const ResumeButtonStyle = styled.div`
  display: flex;
  align-self: center;
  margin-top: 20px;
  opacity: 0.8;
  transition: all .3s ease-in-out;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  .icon {
    margin-right: 2px;
  }
  .link {
    color: ${props => props.theme.palette.primary[0]};
  }
`;

export default ResumeButtonStyle;
