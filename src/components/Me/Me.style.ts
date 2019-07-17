import styled from 'styled-components';

const MeStyle = styled.div`
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
`;

export default MeStyle;
