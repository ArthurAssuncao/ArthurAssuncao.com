import React from 'react';
import { FaRegFilePdf } from 'react-icons/fa';
import ResumeButtonStyle from './ResumeButton.style';

const resume = '../../assets/files/resume_arthur_assuncao_one-page.pdf';

const ResumeButton = () => {
  return (
    <ResumeButtonStyle className='resume-button'>
      <FaRegFilePdf className='icon' />
      Baixar meu <a href={resume} className='link'>&nbsp;Currículo</a>
    </ResumeButtonStyle>
  );
};

export default ResumeButton;
