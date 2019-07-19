import React from 'react';
import PropTypes from 'prop-types';
import ProjectStyle from './Project.style';
import { InferPropTypes } from '../../types';

const projectPropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

const projectDefaultProps = {
  name: 'Project',
  imgUrl: 'https://via.placeholder.com/300x170',
  description: 'No description',
  url: '#'
};

type ProjectProps = InferPropTypes<typeof projectPropTypes, typeof projectDefaultProps>;

const Project = (props: ProjectProps) => {
  return (
    <ProjectStyle>
      <div className='project-item'>
        <h1 className='project-title'>
          {props.name}
        </h1>
        <img alt={props.name} src={props.imgUrl} className='project-img' />
        <p className='project-description'>{props.description}</p>
      </div>
    </ProjectStyle>
  );
};

Project.defaultProps = projectDefaultProps;

export default Project;
