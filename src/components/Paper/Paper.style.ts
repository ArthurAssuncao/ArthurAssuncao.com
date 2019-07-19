import styled from 'styled-components';

const PaperStyle = styled.div`
  margin-bottom: 10px;
  font-size: 1.4rem;
  .paper-title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .paper-title-icon {
    font-size: 1rem;
    margin-left: 3px;
    opacity: 0.8;
  }
  .paper-info {
    color: ${props => props.theme.palette.grayscale.darkened};
  }
`;

export default PaperStyle;
