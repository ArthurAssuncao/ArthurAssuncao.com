import React from 'react';
import { IoIosPhonePortrait } from 'react-icons/io';
import { MdImportantDevices, MdPhonelinkSetup } from 'react-icons/md';
import HowDoItem from '../../components/HowDoItem';
import HowDoStyle from './HowDo.style';
import HR from './HR.style';

const HowDo = () => {
  return (
    <HowDoStyle id="job">
      <HowDoItem
        title="Development with components for reuse"
        description="Reactive and functional development with ReactJS, TypeScript and Jest for unit testing (TDD), thus providing a more reliable code and easy maintenance."
      >
        <div>
          <IoIosPhonePortrait />
        </div>
      </HowDoItem>
      <HR />
      <HowDoItem
        title="Responsive development"
        description="Creation of responsive systems with techniques such as Mobile First, Desktop First and Offline First to meet the various characteristics of the current devices."
        childrenPosition="first"
      >
        <div>
          <MdImportantDevices />
        </div>
      </HowDoItem>
      <HR />
      <HowDoItem
        title="Your web system as a mobile application"
        description="With PWA, you enjoy a rich user experience as it is fast, off-line and increasing the engagement of your web application."
      >
        <div>
          <MdPhonelinkSetup />
        </div>
      </HowDoItem>
      <HR />
    </HowDoStyle>
  );
};

export default HowDo;
