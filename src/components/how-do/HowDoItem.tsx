import React from 'react';
import styled from 'styled-components';

const CarouselItem = styled.div`
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.color.pastelYellow};

  h1 {
    font-size: 2em;
    line-height: 2em;
  }

  svg {
    font-size: 300px;
    padding-left: 20px;
  }
`;

const HowDoItem = (props: any) => {
  return (
    <CarouselItem>
      <div>
        <h1>
          { props.title }
        </h1>
        <span>
          { props.description }
        </span>
      </div>
      { props.children }
    </CarouselItem>
  );
}

export default HowDoItem;