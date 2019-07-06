import styled from 'styled-components';

const ProjectsStyle = styled.section`
  background-color: ${props => props.theme.palette.neutral[3]};
  padding: 200px 0;
  li {
    background-color: ${props => props.theme.palette.neutral[3]} !important;
  }
  .projects-carousel{
    margin-top: 10px;
  }
`;

export default ProjectsStyle;