import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './index.style';

const projectPropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  showLegend: PropTypes.bool.isRequired
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
      <div className='item'>
        <h1>
          { props.name }
        </h1>
        <img alt='' src={ props.imgUrl } />
      </div>
      {/* <p className={ props.showLegend ? 'legend': 'legend hidden' }>{ props.description }</p> */}
    </ProjectItem>
  );
}

Project.defaultProps = projectDefaultProps;

export default Project;