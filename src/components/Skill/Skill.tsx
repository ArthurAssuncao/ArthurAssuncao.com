import PropTypes from 'prop-types';
import React from 'react';
import { InferPropTypes } from '../../types';
import SkillStyle from './Skill.style';

const skillDefaultProps = {};

const skillPropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  name: PropTypes.string.isRequired,
};

type SkillProps = InferPropTypes<
  typeof skillPropTypes,
  typeof skillDefaultProps
>;

const Skill = (props: SkillProps) => {
  return (
    <SkillStyle aria-label={`I know ${props.name}`}>
      <span className="skill-icon">{props.children}</span>
      <span className="skill-name">{props.name}</span>
    </SkillStyle>
  );
};

Skill.defaultProps = skillDefaultProps;

export default Skill;
