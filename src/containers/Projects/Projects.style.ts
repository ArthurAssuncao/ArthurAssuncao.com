import styled from 'styled-components';

const ProjectsStyle = styled.section`
  @media (min-width: 0px) {
    background-color: ${props => props.theme.palette.neutral[3]};
    padding: 20px 0;
    width: 100vw;

    .projects-list {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
    }
  }

  @media (min-width: 480px) {

  }

  @media (min-width: 768px), (min-width: 768px) and (max-device-width: 480px) and (orientation: portrait) {
    .projects-list {
      flex-direction: row;
    }
  }

  @media (min-width: 992px), (min-width: 992px) and (max-device-width: 640px) and (orientation: landscape) {

  }

  @media (min-width: 1200px) {

  }
`;

export default ProjectsStyle;
