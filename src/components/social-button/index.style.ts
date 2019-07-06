import styled from 'styled-components';

const SocialButtonStyle = styled.div`
  transition: color .3s ease-in-out;
  margin: 10px;

  .social-link{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${props => props.theme.palette.neutral[0]};
  }

  a {
    transition: all .3s ease-in-out;
  }

  a:hover{
    color: ${props => props.theme.palette.primary[0]};
  }

  .social-name {
    font-size: 18px;
  }

  .icon {
    font-size: 30px;
  }
`;

export default SocialButtonStyle;
