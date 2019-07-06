import React from 'react';
import { FaRegFilePdf } from 'react-icons/fa';
import ResumeButtonStyle from './index.style';
// import resume from './../../../assets/files/resume_arthur_assuncao.pdf';

const ResumeButton = () => {
  return (
    <ResumeButtonStyle className='resume-button'>
      <FaRegFilePdf className='icon' />
      Baixar meu <a href='{ resume }' className='link'>&nbsp;Currículo</a>
    </ResumeButtonStyle>
  );
}

export default ResumeButton;
