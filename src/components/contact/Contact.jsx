import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const [message, setMessage] = React.useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    setMessage(true);
    e.preventDefault();

    emailjs.sendForm('service_y59qot8', 'template_dgln0nm', form.current, 'WdwcZYq2AEL0ExYFo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
    <h5> Get in Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact__container">
    <div className="contact__options">
      <article className='contact__option'>
      <MdOutlineEmail/> 
      <h4>Email</h4>
      <h5>kdsimran@umich.edu</h5>
      <a href="mailto:kdsimran@umich.edu" target= "_blank">Send a message</a>
      </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="Name" placeholder='Your Full Name' required />
        <input type='email' name='Email' placeholder='Your Email' required /> 
        <textarea name='message' id='' rows={7} placeholder='Your Message' required ></textarea>
        <button type='submit' className= 'btn btn-primary'>Send Message</button> 
        {message && <span> Thank you! I will reply as soon as I can. </span>}
      </form>
      </div>
    </section>
  )
}

export default Contact