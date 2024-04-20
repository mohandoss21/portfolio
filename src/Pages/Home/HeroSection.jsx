import React from 'react'

function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className='hero--section--content--box'>
        <div className='hero--section--content'>
          <p className='section--title'>Hey, I'm Mohandoss</p>
          <h1 className='hero--section--title'>
            Frond End
            <br/>
            Developer
          </h1>
          <p className='hero--section--description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            <br/>
            Illo deleniti in id quae voluptates.
          </p>
        </div>
        <button className='btn btn-primary'>Get in Touch</button>
      </div>
      <div className='hero--section--img'>
        <img src="./img/hero_img.png" alt='Hero Section'/>
      </div>
    </section>
  )
}

export default HeroSection
