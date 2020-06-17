import styled from 'styled-components';

const FooterStyle = styled.footer`
  @media (min-width: 0px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.theme.palette.grayscale.darkened};
    height: ${(props) => props.theme.sizes.footerHeight};
    color: ${(props) => props.theme.palette.neutral[0]};
    /* padding: 30px; */
    width: 100%;
    justify-content: space-between;
    padding-bottom: 10px;
  }

  @media (min-width: 768px),
    (min-width: 768px) and (max-device-width: 480px) and (orientation: portrait) {
    height: calc(${(props) => props.theme.sizes.footerHeight} - 100px);
  }
`;

export default FooterStyle;
