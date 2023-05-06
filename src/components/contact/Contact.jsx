import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'

const Contact = () => {
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
      <a href="mailto:kdsimran@umich.edu">Send a message</a>
      </article>
      </div>
      <form action=''>
        <input type="text" name="Name" placeholder='Your Full Name' required />
        <input type='email' name='Email' placeholder='Your Email' required />
        <textarea name='message' id='' rows={7} placeholder='Your Message' required ></textarea>
        <button type='submit'></button>
      </form>
      </div>
    </section>
  )
}

export default Contact