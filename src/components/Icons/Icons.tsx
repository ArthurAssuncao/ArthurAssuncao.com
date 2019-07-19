import React from 'react';
import typescriptIcon from '../../assets/images/icons/typescriptlang.svg';
import jestIcon from '../../assets/images/icons/jest.svg';

const IconBase = (icon: string, props: any) => {
  return (
    <svg {...props} stroke="currentColor" fill="currentColor" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <image xlinkHref={icon} height="1em" width="1em"></image>
    </svg>
  );
};

const TypescriptIcon = (props: any) => IconBase(typescriptIcon, props);

const JestIcon = (props: any) => IconBase(jestIcon, props);

export { TypescriptIcon, JestIcon };
