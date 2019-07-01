import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import { IoIosPhonePortrait } from 'react-icons/io';
import { MdImportantDevices } from 'react-icons/md';

import HowDoItem from './HowDoItem';

const SectionCarousel = styled.section`
  min-height: 500px;
  position: relative;
  top: ${props => props.theme.size.headerHeight};
  padding-bottom: ${props => props.theme.size.headerHeight};
`;

const HowDo = () => {
  return (
    <SectionCarousel id="job">
      <Carousel
        axis="vertical"
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        showArrows={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay={true}
        transitionTime={1000}
        className="presentation-mode"
      >
        <HowDoItem
          title="Development with ReactJS"
          description="Reactive and functional development with components for reuse"
        >
          <div>
            <IoIosPhonePortrait />
          </div>
        </HowDoItem>
        <HowDoItem
          title="Responsive development"
          description="Applications that fit all device sizes"
        >
          <div>
            <MdImportantDevices />
          </div>
        </HowDoItem>
      </Carousel>
    </SectionCarousel>
  );
}

export default HowDo;