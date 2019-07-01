import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProjectItem = styled.div`
  background-color: white;
  padding: 10px;
  margin: 10px 20px 10px 20px;
  border-radius: 2px 2px 0 0;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);

  &:hover {
    box-shadow: 0 4px 7px 0 rgba(0,0,0,.16), 0 4px 12px 0 rgba(0,0,0,.12);
    cursor: pointer;
  }

  img {
    height: 170px;
    width: 320px;
  }

  h1 {
    font-size: 1.1em;
    color: #777;
    line-height: 2em;
    margin-top: -10px;
  }
`;

const projectPropTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

const projectDefaultProps = {
  name: 'Project',
  imgUrl: 'https://via.placeholder.com/320x170',
  description: 'No description',
  url: '#'
};

type InferPropTypes<
  PropTypes,
  DefaultProps = {},
  Props = PropTypes.InferProps<PropTypes>
> = {
  [Key in keyof Props]: Key extends keyof DefaultProps
    ? Props[Key] | DefaultProps[Key]
    : Props[Key]
};

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