import styled from 'styled-components';

const CourseStyle = styled.div`
  font-size: 1.4rem;
  margin-bottom: 10px;
  .course-name {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .course-school, .course-date {
    color: ${props => props.theme.palette.grayscale.darkened};
  }
`;

export default CourseStyle;
