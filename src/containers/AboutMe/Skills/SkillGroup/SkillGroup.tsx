import React from 'react';
import PropTypes from 'prop-types';
import SkillGroupStyle from './SkillGroup.style';
import { InferPropTypes } from '../../../../types';

const skillGroupDefaultProps = {
};

const skillGroupPropTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

type SkillGroupProps = InferPropTypes<typeof skillGroupPropTypes, typeof skillGroupDefaultProps>;

const generateTypeFriendly = (type: string) => {
  let typeText = 'undefined';
  let typeDescription = 'undefined';
  if (type === 'more-confortable') {
    typeText = 'More Confortable';
    typeDescription = 'Understood and executed with full confidence';
  }
  else if (type === 'confortable') {
    typeText = 'Confortable';
    typeDescription = 'Proficient with room for improvement';
  }
  else if (type === 'less-confortable') {
    typeText = 'Less Confortable';
    typeDescription = 'Amazing in theory, but still on a learning path';
  }
  return [typeText, typeDescription];
};

const SkillGroup = (props: SkillGroupProps) => {
  const [typeText, typeDescription] = generateTypeFriendly(props.type);

  return (
    <SkillGroupStyle>
      <span className="skillGroup-header">
        <h3 className="skillGroup-title">{typeText}</h3>
        <span className="skillGroup-description">{typeDescription}</span>
      </span>
      <div className="skillGroup-itens">
        {props.children}
      </div>
    </SkillGroupStyle>
  );
};

SkillGroup.defaultProps = skillGroupDefaultProps;

export default SkillGroup;
