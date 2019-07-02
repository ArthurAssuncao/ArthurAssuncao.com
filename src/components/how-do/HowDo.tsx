import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';
import { IoIosPhonePortrait } from 'react-icons/io';
import { MdImportantDevices } from 'react-icons/md';

import HowDoItem from './HowDoItem';

const Section = styled.section`
  position: relative;
  top: ${props => props.theme.size.headerHeight};
  padding-bottom: ${props => props.theme.size.headerHeight};
`;

const HowDo = () => {
  return (
    <Section id="job">
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
        childrenPosition="first"
      >
        <div>
          <MdImportantDevices />
        </div>
      </HowDoItem>
    </Section>
  );
}

export default HowDo;