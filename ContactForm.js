// src/components/ContactForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    mobile_number: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3002/submit-form', formData);
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="contact form">
      <h3>Send a message</h3>
      <form onSubmit={handleSubmit}>
        <div className="formBox">
          <div className="row50">
            <div className="inputBox">
              <span>First Name</span>
              <input type="text" name="first_name" placeholder="Enter first name" onChange={handleChange} />
            </div>
            <div className="inputBox">
              <span>Last Name</span>
              <input type="text" name="last_name" placeholder="Enter last name" onChange={handleChange} />
            </div>
          </div>

          <div className="row50">
            <div className="inputBox">
              <span>Email</span>
              <input type="text" name="email" placeholder="Enter email" onChange={handleChange} />
            </div>
            <div className="inputBox">
              <span>Mobile</span>
              <input type="number" name="mobile_number" placeholder="Enter mobile number" onChange={handleChange} />
            </div>
          </div>

          <div className="row100">
            <div className="inputBox">
              <span>Message</span>
              <textarea name="message" placeholder="Write your message here...." onChange={handleChange}></textarea>
            </div>
          </div>

          <div className="row100">
            <div className="inputBox">
              <input type="submit" value="Send" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

