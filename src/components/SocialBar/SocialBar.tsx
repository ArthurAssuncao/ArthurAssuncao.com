import React from 'react';
import { FaGithubSquare, FaLinkedin, FaAngellist } from 'react-icons/fa';
import SocialBarStyle from './SocialBar.style';
import SocialButton from './SocialButton';

const SocialBar = () => {
  return (
    <SocialBarStyle className='social'>
      <SocialButton
        name='Lattes'
        perfilUrl='http://lattes.cnpq.br/8136835668168874'
      >
        <i className='ai ai-lattes-square icon'></i>
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
