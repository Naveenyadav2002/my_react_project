import React from 'react'
import './contact.css'
import msg_icon from '../../assists/msg-icon.png'
import mail_icon from "../../assists/mail-icon.png"
import location_icon from '../../assists/location-icon.png'
import phone_icon from '../../assists/phone-icon.png'
import white_arrow from '../../assists/white-arrow.png'
import { useState } from 'react'
import axios from 'axios';

function Contact() {

  const [result, setResult] = useState("");

  
const onSubmit = async function (event) {
  event.preventDefault();
  setResult("Sending....");
  const formData = new FormData(event.target);
  formData.append("access_key", "ca2e5e88-2670-4fb9-9c86-7737dea44051");

  try {
    const response = await axios.post("https://api.web3forms.com/submit", formData);

    if (response.data.success) {
      setResult("Email Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", response.data.success);
      setResult(response.data.message);
    }
  } catch (error) {
    console.error("Error", error);
    setResult("An error occurred while sending the email.");
  }
};


  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message<img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact from or find our contact
          information below. Your feedback, question, and suggestions are
          important to us we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li><img src={mail_icon} />Contact@NaveenYadav.dev</li>
          <li><img src={phone_icon} />+916300256371</li>
          <li><img src={location_icon} />Nalgonda,Chityal.<br />ShivaneniGudem, H-N0-3-128</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label> You Name</label>
          <input type="text" name='name' placeholder='Enter your Name' required />
          <label>Phone Number</label>
          <input type='tel' id="phone" name='phone' placeholder='Enter your Number' required />
          <label>E-mail</label>
          <input type="email" id='email' name='email' placeholder='Enter your e-email' required />
          <lable>Write your messages here</lable>
          <textarea name='message' rows='5' placeholder='Enter your message' required />
          <button type='submit' className='btn dark-btn'>Submit Now<img src={white_arrow} /></button>

        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact