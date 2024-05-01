import React from 'react'
import "./contact.scss";
import {SiMinutemailer} from "react-icons/si";
import { useRef } from 'react';
import emailjs from 'emailjs-com';
function Contact() {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v5scl9i', 'template_m4m4h1p', form.current, '7ifHKYVgcqKmAQJn8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      alert('mail send successfully')
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className="contact_options">
          <article className='contact_option'>
            <SiMinutemailer className='contact_option-icon'/>
              <h4>Email</h4>
              <h5>himanshusharmaok@gmail.com</h5>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=himanshusharmaok@gmail.com" target="_blank" rel="noreferrer">Send a Mail</a>
          </article>
          <article className='contact_option'>
            <SiMinutemailer className='contact_option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+917814541207</h5>
              <a href="https://api.whatsapp.com/send?phone=917814541207" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name'  placeholder='Your Full Name' required/>
          <input type="email" name='email'  placeholder='Your Email' required/>
          <textarea placeholder='Your message' name="message" id="" rows="7" required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
