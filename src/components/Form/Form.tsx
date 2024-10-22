import React from 'react';
import { FaUserCircle, FaEnvelope, FaPen, FaPaperPlane } from 'react-icons/fa';
import FormStyle from './Form.style';

const Form = () => {
  return (
    <FormStyle name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true">
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
      <div data-netlify-recaptcha="true"></div>
      <div className='form-submit'>
        <button type="button" className='button-submit' data-id="form-submit" aria-label="Send Message">
          <span>Send <FaPaperPlane /></span>
        </button>
      </div>
    </FormStyle>
  );
};

export default Form;
