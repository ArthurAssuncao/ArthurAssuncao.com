import styled from 'styled-components';

const FormStyle = styled.div`
  @media (min-width: 0px) {
    display: grid;
    grid-template-areas:
      "formname formname"
      "formemail formemail"
      "formmessage formmessage"
      "formsubmit formsubmit";
    grid-gap: 1rem;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto 200px auto;

    width: 100vw;
    font-size: 2.3rem;

    .form-name {
      grid-area: formname;
      display: flex;
      flex-direction: column;
      justify-self: center;
    }

    .form-email {
      grid-area: formemail;
      display: flex;
      flex-direction: column;
      justify-self: center;
      * {
        justify-content: flex-start;
      }
    }

    .form-message {
      grid-area: formmessage;
      justify-self: center;
      display: flex;
      flex-direction: column;
      textarea {
        height: 200px;
        width: 62vw;
        margin: 10px auto;
        padding: 10px;
      }
    }

    .form-submit {
      grid-area: formsubmit;
      justify-self: center;
      .button-submit {
        width: 65vw;
        height: 35px;
        display: inline-block;
        padding: 0em 1.2em;
        margin: 10px 0.3em;
        border: none;
        border-radius: 4px;
        box-sizing: border-box;
        text-decoration: none;
        font-weight: 300;
        font-size: 23px;
        color: ${props => props.theme.palette.neutral[0]};
        background-color: ${props => props.theme.palette.accent};
        text-align: center;
        transition: all 0.2s;
        box-shadow: 0 0 5px 0 ${props => props.theme.palette.grayscale.darkened};
      }
      .button-submit:hover{
        color: lightgray;
        border-color: lightgray;
        cursor: pointer;
      }
      @media all and (max-width:30em){
        .button-submit{
          display:block;
          margin:0.4em auto;
        }
      }
    }

    svg {
      margin-bottom: -4px;
      margin-right: 5px;
    }

    input, textarea {
      padding: 0px 16px;
      margin-left: 10px;
      border: none;
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.8);
      outline: none;
      box-shadow: 0px 4px 20px 0px transparent;
      transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;

      &:hover {
        background-color: rgba(255, 255, 255, 0.45);
        box-shadow: 0px 4px 20px 0px ${props => props.theme.palette.grayscale.darkened};
      }
    }

    .form-name input, .form-email input {
      height: 45px;
      width: 60vw;
      margin: 10px auto;
    }

    input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
      color: rgba(200, 200, 200, 0.8);
    }
  }

  @media (min-width: 480px) {

  }

  @media (min-width: 768px), (min-width: 768px) and (max-device-width: 480px) and (orientation: portrait) {
    grid-template-areas:
      "formname formemail"
      "formmessage formmessage"
      "formsubmit formsubmit";
    grid-gap: 1rem;
    grid-template-columns: auto auto;
    grid-template-rows: auto 200px auto;

    .form-name {
      justify-self: end;
    }

    .form-email {
      justify-self: start;
    }

    .form-name input, .form-email input {
      height: 45px;
      width: 25vw;
    }

    .form-submit {
      .button-submit {
        width: 30vw;
      }
    }

    .form-message textarea {
      height: 200px;
      width: 55vw;
    }
  }

  @media (min-width: 992px), (min-width: 992px) and (max-device-width: 640px) and (orientation: landscape) {

  }

  @media (min-width: 1200px) {

  }
`;

export default FormStyle;
