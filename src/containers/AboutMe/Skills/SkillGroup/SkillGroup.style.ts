import styled from 'styled-components';

const SkillGroupStyle = styled.div`
  @media (min-width: 0px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    width: 70vw;
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
      width: 80vw;
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
  }

  @media (min-width: 480px) {
    .skillGroup-itens{
      width: 65vw;
    }
  }

  @media (min-width: 768px), (min-width: 768px) and (max-device-width: 480px) and (orientation: portrait) {
    width: 22vw;
    margin-bottom: 0px;
    .skillGroup-itens{
      width: 20vw;
    }
  }

  @media (min-width: 992px), (min-width: 992px) and (max-device-width: 640px) and (orientation: landscape) {

  }

  @media (min-width: 1200px) {
    width: 20vw;
    .skillGroup-itens{
      width: 20vw;
    }
  }
`;

export default SkillGroupStyle;
