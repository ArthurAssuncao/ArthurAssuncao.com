import styled from 'styled-components';

const AboutMeStyle = styled.section`
  padding: 0 0px 50px 0px;
  background-color: ${props => props.theme.palette.neutral[3]};
  color: ${props => props.theme.palette.black};

  .aboutme-me {
    margin-bottom: 30px;
  }
`;

export default AboutMeStyle;
