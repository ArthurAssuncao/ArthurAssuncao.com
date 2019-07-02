import React from 'react';
import styled from 'styled-components';
import { FaUserCircle, FaEnvelope, FaPen, FaPaperPlane } from 'react-icons/fa';

const FormInternal = styled.div`
  display: grid; 
  grid-template-areas: 
    "formname formemail" 
    "formmessage formmessage" 
    "formsubmit formsubmit";
  grid-gap: 1rem;
  grid-template-columns: auto auto; 
  grid-template-rows: auto 200px auto;
  
  width: 100%;
  font-size: 23px;
  

  .form-name {
    grid-area: formname;
    display: flex;
    flex-direction: column;
    justify-self: end;
  }

  .form-email {
    grid-area: formemail;
    display: flex;
    flex-direction: column;
    justify-self: start;
    * {
      justify-content: flex-start;
    }
  }

  .form-message {
    grid-area: formmessage;
    justify-self: center;
    display: flex;
    flex-direction: column;
  }

  .form-submit {
    grid-area: formsubmit;
    .button-submit {
      width: 350px;
      height: 35px;
      display: inline-block;
      padding: 0em 1.2em;
      margin: 10px 0.3em 0.3em 0;
      border: none;
      border-radius: 4px;
      box-sizing: border-box;
      text-decoration: none;
      font-weight: 300;
      font-size: 23px;
      color: ${props => props.theme.color.pastelYellow};
      background-color: ${props => props.theme.color.primary};
      text-align: center;
      transition: all 0.2s;
      box-shadow: 0 0 5px 0 ${props => props.theme.color.shadow};
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
      box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
    }
  }

  .form-name input, .form-email input {
    height: 45px;
    width: 20vw;
    margin: 10px auto;
  }

  textarea {
    height: 200px;
    width: 44.5vw;
    margin: 10px 0px 0 0;
    padding: 10px;
  }
  
  input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
    color: rgba(200, 200, 200, 0.8);
  }
`;

const Form = () => {
  return (
    <FormInternal>
      <label className='form-name field'>
        <span><FaUserCircle /> Your Name</span>
        <input type="text" name="name" placeholder="Name" />
      </label>
      <label className='form-email field'>
        <span><FaEnvelope /> Your E-mail</span>
        <input type="email" name="email" placeholder="E-mail" />
      </label>
      <label className='form-message field'>
        <span><FaPen /> Message</span>
        <textarea name="message" placeholder='Write your message'></textarea>
      </label>
      <div className='form-submit'>
        <button type="button" className='button-submit' data-id="form-submit" aria-label="Send">
          <span>Send <FaPaperPlane /></span>
        </button>
      </div>
    </FormInternal>
  );
}

export default Form;