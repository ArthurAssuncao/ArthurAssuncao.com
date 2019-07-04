import styled from 'styled-components';

const Item = styled.div`
  min-height: 500px;
  max-width: 76vw;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  background-color: ${props => props.theme.palette.neutral[0]};
  line-height: 20px;

  .how-do-item-description {
    max-width: 200px;
  }

  h1 {
    font-size: 2em;
    line-height: 2em;

    &:first-letter {
      font-size: 1.5em;
    }
  }

  svg {
    font-size: 300px;
    padding: 0 20px;
  }
`;

export default Item;