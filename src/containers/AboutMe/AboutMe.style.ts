import styled from 'styled-components';

const AboutMeStyle = styled.section`
  padding: 0 0px 50px 0px;
  background-color: ${props => props.theme.palette.neutral[3]};
  color: ${props => props.theme.palette.black};

  .aboutme-me {
    margin-bottom: 30px;
  }
  .aboutme-education-production {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    width: 80vw;
    margin-bottom: 20px;
    line-height: 2rem;
  }
`;

export default AboutMeStyle;
