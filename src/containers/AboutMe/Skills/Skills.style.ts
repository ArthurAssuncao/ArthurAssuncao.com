import styled from 'styled-components';

const SkillsStyle = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 75vw;
  background-color: ${props => props.theme.palette.primary};
  border-radius: 2px;

  .skills-title {
    font-size: 2rem;
    padding: 10px 5px 5px 5px;
    color: ${props => props.theme.palette.neutral[0]};
  }
  .skills-group {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }
`;

export default SkillsStyle;
