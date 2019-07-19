import styled from 'styled-components';

const ProjectStyle = styled.div`
  @media (min-width: 0px) {
    max-height: 600px;
    height: auto;
    text-align: justify;
    line-height: 2rem;
    padding: 20px;
    width: 90vw;
    margin: 0 auto;
    color: ${props => props.theme.palette.grayscale.darkened};

    .project-item {
      background-color: ${props => props.theme.palette.white};
      padding: 10px;
      margin-bottom: 20px;
      border-radius: 4px;
      box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);

      &:hover {
        box-shadow: 0 4px 7px 0 rgba(0,0,0,0.16), 0 4px 12px 0 rgba(0,0,0,0.12);
        cursor: pointer;
      }
    }

    .project-img {
      display: block;
      /* stylelint-disable-next-line */
      width: 100%;
      height: auto;
      margin-top: 10px;
      margin-bottom: 10px;
      max-height: 200px;
    }

    .project-title {
      font-size: 2rem;
      color: ${props => props.theme.palette.grayscale.darkened};
      line-height: 2rem;
      text-align: center;
    }

    .project-description {
      width: 85vw;
      /* hide text if it more than N lines  */
      overflow: hidden;
      /* for set '...' in absolute position */
      position: relative;
      /* use this value to count block height */
      line-height: 2rem;
      /* max-height = line-height (1.2) * lines max number (3) */
      max-height: calc(2rem * 15);
      /* fix problem when last visible word doesn't adjoin right side  */
      text-align: justify;
      /* place for '...' */
      margin-right: 0rem;
      padding-right: 0rem;
    }
    /* create the ... */
    .project-description:before {
      /* points in the end */
      content: '...';
      /* absolute position */
      position: absolute;
      /* set position to right bottom corner of block */
      right: 0rem;
      bottom: -1rem;
      z-index: 998;
    }
    /* hide ... if we have text, which is less than or equal to max lines */
    .project-description:after {
      /* points in the end */
      content: '';
      /* absolute position */
      position: absolute;
      /* set position to right bottom corner of text */
      right: 0rem;
      /* set width and height */
      width: 1.6rem;
      height: 1.6rem;
      margin-top: 0.4rem;
      /* bg color = bg color under block */
      background: white;
      z-index: 999;
    }
  }

  @media (min-width: 480px) {

  }

  @media (min-width: 768px), (min-width: 768px) and (max-device-width: 480px) and (orientation: portrait) {
    width: 22vw;

    .project-description {
      width: 20vw;
    }
  }

  @media (min-width: 992px), (min-width: 992px) and (max-device-width: 640px) and (orientation: landscape) {
  }

  @media (min-width: 1200px) {
    .project-img {
      max-height: 300px;
    }
  }
`;

export default ProjectStyle;
