import React from 'react';
import SkillStyle from './Skill.style';

const Skill = (props: any) => {
  return (
    <SkillStyle>
      <span className='skill-icon'>{props.children}</span>
      <span className='skill-name'>{props.name}</span>
    </SkillStyle>
  );
};

export default Skill;
