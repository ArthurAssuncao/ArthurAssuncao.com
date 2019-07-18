import styled from 'styled-components';

const SkillGroupStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  width: 20vw;
  text-align: center;
  margin: 10px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: ${props => props.theme.palette.neutral[0]};
  border-radius: 2px;

  .skillGroup-itens{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 20vw;
  }

  .skillGroup-header {
    padding-bottom: 15px;
  }

  .skillGroup-title{
    padding-bottom: 10px;
    font-size: 2rem;
  }

  .skillGroup-description{
    font-size: 1.3rem;
  }
`;

export default SkillGroupStyle;
