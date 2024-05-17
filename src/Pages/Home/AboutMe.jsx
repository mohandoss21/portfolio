import React from 'react'

function AboutMe() {
  return (
    <section id='AboutMe' className='about--section'>
      <div className='about--section--img'>
       
        <img src="./img/about-me.png" alt='About me'/>
      </div>
      <div className='hero--section--content--box about--section--content--box'>
        <div className='hero--section--content'>
          <p className='section-title'>About</p>
          <h1 className='skills--section--heading'>About Me</h1>
          <p className='hero--section--description'> Third-year Computer Science student at TCE, specializing in Front End Web Development and Python. Experienced in impactful projects and internships contributing to cross-functional teams. </p>
          <p className='hero--section--description'> Proficient in Java, Python, C,web development, and database management. Eager to embrace new challenges and technologies for continuous learning and growth in computer science.</p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
