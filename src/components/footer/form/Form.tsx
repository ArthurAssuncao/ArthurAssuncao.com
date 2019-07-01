import React from 'react';
import styled from 'styled-components';
import { FaUserCircle, FaEnvelope, FaPen, FaPaperPlane } from 'react-icons/fa';

const FormInternal = styled.div`
  display: flex;
  /* align-items: center; */
  /* flex-direction: column; */
  width: 100%;
  
  div {
    height: 50px;

    svg {
      margin-bottom: -4px;
      margin-right: 5px;
    }

    input, textarea {
      position: relative;
      padding: 0px 16px;
      margin-left: 10px;
      border: none;
      border-radius: 4px;
      font-weight: 400;
      line-height: normal;
      background-color: rgba(255, 255, 255, 0.8);
      outline: none;
      box-shadow: 0px 4px 20px 0px transparent;
      transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
      -webkit-appearance: none;
      position: relative;
      transition: 0.3s all;

      &:hover {
        background-color: rgba(255, 255, 255, 0.45);
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
      }
    }

    input {
      height: 45px;
    }

    textarea {
      height: 200px;
      width: 300px;
    }
    
    input::-webkit-input-placeholder {
      color: rgba(0, 0, 0, 0.8);
    }
    input::-moz-placeholder {
      color: rgba(0, 0, 0, 0.8);
    }
    input:-ms-input-placeholder {
      color: rgba(0, 0, 0, 0.8);
    }
    input:-moz-placeholder {
      color: rgba(0, 0, 0, 0.8);
    }

  }
`;

const Form = () => {
  return (
    <FormInternal>
      <div>
        <label>
          <span><FaUserCircle /> Your Name</span>
          <input type="text" name="name" placeholder="Name" />
        </label>
      </div>
      <div>
        <label>
          <span><FaEnvelope /> Your E-mail</span>
          <input type="email" name="email" placeholder="E-mail" />
        </label>
      </div>
      <div>
        <label>
          <span><FaPen /> Message</span>
          <textarea name="message"></textarea>
        </label>
      </div>
    </FormInternal>
  );
}

export default Form;