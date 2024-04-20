import React from 'react'

function ContactMe() {
  return (
      <section id='Contact' className='contact--section'>
        <div >
          <p className='sub--title'>Get In Touch</p>
        <h2>Contact Me</h2>
        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <form className='contact--form--container'>
          <div className='container'>
            <label htmlFor='first-name' className='contact--label'>
            <span className='text-md'>First Name</span>
            <input type='text' className='contact--input text-md' name='first-name' id='first-name' required/>
            </label>
            <label htmlFor='last-name' className='contact--label'>
            <span className='text-md'>Last Name</span>
            <input type='text' className='contact--input text-md' name='last-name' id='last-name' required/>
            </label>
            <label htmlFor='email' className='contact--label'>
            <span className='text-md'>Email</span>
            <input type='email' className='contact--input text-md' name='Email' id='Email' required/>
            </label>
            <label htmlFor='phone-number' className='contact--label'>
            <span className='text-md'>Phone Number</span>
            <input type='number' className='contact--input text-md' name='phone-number' id='phone-number' />
            </label>
            <label htmlFor='message' className='contact--label'>
            <span className='text-md'>Message</span>
            <textarea className='contact--input text-md' name='message' id='message' required/>
            </label>
            </div>
            <div>
            <button className='btn btn-primary contact--form--button'>Submit</button>
          </div>
        </form>
    </section>
  )
}

export default ContactMe
