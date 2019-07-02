import React from 'react';
import styled from 'styled-components';
import { FaRegFilePdf } from 'react-icons/fa';
// import resume from './../../../assets/files/resume_arthur_assuncao.pdf';

const ResumeButtonInternal = styled.div`
  display: flex;
  align-self: center;
  margin-top: 20px;
  opacity: 0.8;
  transition: all .3s ease-in-out;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  .icon {
    margin-right: 2px;
  }
  .link {
    color: ${props => props.theme.color.primary};
  }
`;

const ResumeButton = () => {
  return (
    <ResumeButtonInternal className='resume-button'>
      <FaRegFilePdf className='icon' />
      Baixar meu <a href='{ resume }' className='link'>&nbsp;Currículo</a>
    </ResumeButtonInternal>
  );
}

export default ResumeButton;