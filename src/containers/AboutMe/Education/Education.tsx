import React from 'react';
import EducationStyle from './Education.style';
import Course from '../../../components/Course';

const Education = () => {
  return (
    <EducationStyle>
      <Course
        name='Master of Degree in Computer Science'
        school='Universidade Federal de Ouro Preto (UFOP)'
        dateStart={2014}
        dateEnd={2016}
      />
      <Course
        name='Technologist Degree in Internet Systems'
        school='Instituto Federal do Sudeste de Minas Gerais (IFSEMG)'
        dateStart={2011}
        dateEnd={2014}
      />
    </EducationStyle>
  );
};

export default Education;
