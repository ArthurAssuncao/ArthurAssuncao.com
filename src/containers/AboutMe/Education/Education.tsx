import React from 'react';
import EducationStyle from './Education.style';
import Course from '../../../components/Course';

const Education = () => {
  return (
    <EducationStyle>
      <span className='education-title'>
        Courses
      </span>
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
      <Course
        name='React Ninja'
        school='Udemy (Fernando Daciuk instructor)'
        dateStart={2019}
        dateEnd={2019}
      />
      <Course
        name='Techniques for Front End Development'
        school='Instituto Federal do Sudeste de Minas Gerais (IFSEMG)'
        dateStart={2015}
        dateEnd={2015}
      />
      <Course
        name='Python for Linux Network Administrators'
        school='Instituto Federal do Sudeste de Minas Gerais (IFSEMG)'
        dateStart={2012}
        dateEnd={2012}
      />
    </EducationStyle>
  );
};

export default Education;
