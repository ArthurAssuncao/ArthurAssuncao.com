import styled from 'styled-components';

const SkillsStyle = styled.div`
  @media (min-width: 0px) {
    text-align: center;
    margin: 0 auto;
    width: 90vw;
    background-color: ${(props) => props.theme.palette.primary};
    border-radius: 2px;
    padding-bottom: 20px;

    .skills-title {
      font-size: 2.5rem;
      padding: 10px 5px 5px 5px;
      color: ${(props) => props.theme.palette.neutral[0]};
    }
    .skills-group {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-content: center;
    }
  }

  @media (min-width: 480px) {
  }

  @media (min-width: 768px),
    (min-width: 768px) and (max-device-width: 480px) and (orientation: portrait) {
    width: 90vw;
    .skills-group {
      flex-direction: row;
    }
  }

  @media (min-width: 992px),
    (min-width: 992px) and (max-device-width: 640px) and (orientation: landscape) {
  }

  @media (min-width: 1200px) {
    width: 80vw;
    .skills-group {
      flex-direction: row;
    }
  }
`;

export default SkillsStyle;
