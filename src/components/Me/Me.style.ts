import styled from 'styled-components';

const MeStyle = styled.div`
  @media (min-width: 0px) {
    line-height: 2.3rem;
    text-align: center;
    width: 75vw;
    margin: 0 auto;

    .photo {
      margin: 0 auto;
      margin-bottom: 10px;
      width: 150px;
      height: 150px;
      /* stylelint-disable-next-line */
      border-radius: 50%;
      background: url(${(props: { imgUrl: string }) => props.imgUrl}) no-repeat;
      box-shadow: 0 0 8px rgba(0,0,0,.8);
      /* stylelint-disable-next-line */
      background-size: 100% 100%;
    }

    .description {
      margin-top: 20px;
    }
  }

  @media (min-width: 480px) {
    width: 90vw;
  }

  @media (min-width: 768px), (min-width: 768px) and (max-device-width: 480px) and (orientation: portrait) {

  }

  @media (min-width: 992px), (min-width: 992px) and (max-device-width: 640px) and (orientation: landscape) {

  }

  @media (min-width: 1200px) {
    width: 80vw;
  }


`;

export default MeStyle;
