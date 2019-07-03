import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './project.style';

const projectPropTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

const projectDefaultProps = {
  name: 'Project',
  imgUrl: 'https://via.placeholder.com/300x170',
  description: 'No description',
  url: '#'
}

type InferPropTypes<
    PropTypes,
    DefaultProps = {},
    Props = PropTypes.InferProps<PropTypes>
  > = {
    [Key in keyof Props]: Key extends keyof DefaultProps
      ? Props[Key] | DefaultProps[Key]
      : Props[Key]
}

type ProjectProps = InferPropTypes<typeof projectPropTypes, typeof projectDefaultProps>;

const Project = (props: ProjectProps) => {
  return (
    <ProjectItem>
      <div>
        <h1>
          { props.name }
        </h1>
        <img alt='' src={ props.imgUrl } />
      </div>
    </ProjectItem>
  );
}

Project.defaultProps = projectDefaultProps;

export default Project;