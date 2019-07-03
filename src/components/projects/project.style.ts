import styled from 'styled-components';

const ProjectItem = styled.div`
  background-color: white;
  padding: 10px;
  margin: 10px 20px 10px 20px;
  border-radius: 4px;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);

  &:hover {
    box-shadow: 0 4px 7px 0 rgba(0,0,0,.16), 0 4px 12px 0 rgba(0,0,0,.12);
    cursor: pointer;
  }

  img {
    height: 170px;
    width: 300px;
  }

  h1 {
    font-size: 1.1em;
    color: #777;
    line-height: 2em;
    margin-top: -10px;
  }
`;

export default ProjectItem;