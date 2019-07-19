import React from 'react';
import PropTypes from 'prop-types';
import CourseStyle from './Course.style';
import { InferPropTypes } from '../../types';

const coursePropTypes = {
  name: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  dateStart: PropTypes.number.isRequired,
  dateEnd: PropTypes.number.isRequired
};

const courseDefaultProps = {

};

type CourseProps = InferPropTypes<typeof coursePropTypes, typeof courseDefaultProps>;

const Course = (props: CourseProps) => {
  return (
    <CourseStyle>
      <div className='course-name'>{props.name}</div>
      <div className='course-school'>{props.school}</div>
      <div className='course-date'><span>{props.dateStart}</span> - <span>{props.dateEnd}</span></div>
    </CourseStyle>
  );
};

Course.defaultProps = courseDefaultProps;

export default Course;
