import React from 'react';
import styled from 'styled-components';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin, FaAngellist } from 'react-icons/fa';

const Social = styled.div`
  display: flex;
  align-self: center;
  margin-top: 20px;
`;

const SocialButtonInternal = styled.div`
  transition: color .3s ease-in-out;
  margin: 10px;

  .social-link{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${props => props.theme.color.pastelYellow};
  }

  a {
    transition: all .3s ease-in-out;
  }

  a:hover{
    color: ${props => props.theme.color.primary};
  }

  .social-name {
    font-size: 18px;
  }

  .icon {
    font-size: 30px;
  }
`;

const SocialButton = (props: any) => {
  return (
    <SocialButtonInternal>
      <a href={ props.perfilUrl } className='social-link'>
        { props.children }
        <span className='social-name'>{ props.name }</span>
      </a>
    </SocialButtonInternal>
    
  );
}

const SocialButtons = () => {
  return (
    <Social className='social'>
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
    </Social>
  );
}

export default SocialButtons;