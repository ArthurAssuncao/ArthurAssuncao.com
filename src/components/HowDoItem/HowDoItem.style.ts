import styled from 'styled-components';

const HowDoItemStyle = styled.div`
  @media (min-width: 0px) {
    background-color: ${props => props.theme.palette.neutral[0]};
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    min-height: 35rem;
    max-width: 80vw;
    flex-direction: column;
    text-align: center;
    line-height: 1.8rem;
    font-size: 1.3rem;

    .howDoItem-title {
      font-size: 2.5rem;
      line-height: 2.5rem;
      padding-bottom: 1rem;

      &:first-letter {
        font-size: 3rem;
      }
    }

    .howDoItem-description {
      text-align: justify;
    }

    .img-container{
      font-size: 15rem;
      padding: 1rem 0;
    }
  }

  @media (min-width: 480px) {
    min-height: 45rem;
    max-width: 90vw;
    .howDoItem-title {
      font-size: 3rem;
      line-height: 3rem;
      &:first-letter {
        font-size: 3.5rem;
      }
    }

    .howDoItem-description {
      font-size: 1.7rem;
      line-height: 2.2rem;
    }

    .img-container{
      font-size: 17rem;
    }
  }

  @media (min-width: 768px), (min-width: 768px) and (max-device-width: 480px) and (orientation: portrait) {
    flex-direction: row;
    min-height: 45rem;
    .howDoItem-title {
      font-size: 3rem;
      line-height: 3rem;
      &:first-letter {
        font-size: 4rem;
      }
    }

    .howDoItem-description {
      font-size: 2rem;
      line-height: 2.5rem;
      text-align: center;
    }

    .img-container{
      font-size: 25rem;
    }
  }

  @media (min-width: 992px), (min-width: 992px) and (max-device-width: 640px) and (orientation: landscape) {
    max-width: 80vw;
  }

  @media (min-width: 1200px) {

  }
`;

export default HowDoItemStyle;
