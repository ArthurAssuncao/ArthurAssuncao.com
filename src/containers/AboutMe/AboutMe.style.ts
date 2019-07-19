import styled from 'styled-components';

const AboutMeStyle = styled.section`
  @media (min-width: 0px) {
    padding: 40px 0px 40px 0px;
    background-color: ${props => props.theme.palette.neutral[3]};
    color: ${props => props.theme.palette.black};

    .aboutme-me {
      margin-bottom: 30px;
    }
    .aboutme-education-production {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      width: 80vw;
      margin-bottom: 20px;
      line-height: 2rem;


    }
  }

  @media (min-width: 480px) {
    .aboutme-education-production {
      width: 90vw;
    }
  }

  @media (min-width: 768px), (min-width: 768px) and (max-device-width: 480px) and (orientation: portrait) {
    .aboutme-education-production {
      display: flex;
      flex-direction: row;

      > div:nth-child(1) {
        margin-right: 20px;
      }

      > div:nth-child(2) {
        margin-left: 20px;
      }
    }
  }

  @media (min-width: 992px), (min-width: 992px) and (max-device-width: 640px) and (orientation: landscape) {

  }

  @media (min-width: 1200px) {
    .aboutme-education-production {
      width: 80vw;
    }
  }
`;

export default AboutMeStyle;
