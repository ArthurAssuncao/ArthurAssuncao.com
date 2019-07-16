import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin, FaAngellist } from 'react-icons/fa';
import SocialBarStyle from './SocialBar.style';
import SocialButton from './SocialButton';

const SocialBar = () => {
  return (
    <SocialBarStyle className='social'>
      <SocialButton
        name='Facebook'
        perfilUrl='https://www.facebook.com/arthurassuncao'
      >
        <FaFacebookSquare className='icon' />
      </SocialButton>
      <SocialButton
        name='Github'
        perfilUrl='https://github.com/arthurassuncao'
      >
        <FaGithubSquare className='icon' />
      </SocialButton>
      <SocialButton
        name='LinkedIn'
        perfilUrl='https://www.linkedin.com/in/arthurassuncao'
      >
        <FaLinkedin className='icon' />
      </SocialButton>
      <SocialButton
        name='AngelList'
        perfilUrl='https://angel.co/arthurassuncao'
      >
        <FaAngellist className='icon' />
      </SocialButton>
    </SocialBarStyle>
  );
};

export default SocialBar;
