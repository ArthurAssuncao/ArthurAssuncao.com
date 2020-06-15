import styled from 'styled-components';

const SkillStyle = styled.a`
  display: flex;
  flex-direction: column;
  padding: 10px;
  color: ${(props) => props.theme.palette.black};
  transition: color 0.3s ease-in-out;
  .skill-icon {
    font-size: 4rem;
  }
  .skill-name {
    font-size: 1.3rem;
    font-weight: bold;
  }
`;

export default SkillStyle;
