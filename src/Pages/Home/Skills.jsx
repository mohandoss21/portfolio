import React from 'react'
import data from "../../data/index.json"
function Skills() {
  return (
    <section className='skills--section' id="mySKills">
      <div className='portfolio--container'>
        <p className='section-title'>Skills</p>
         <h1 className='skills--section--heading'>My Expertise</h1>
      </div>
      <div className='skills--section--container'>
      {data?.skills?.map((item, index) => (
  <div key={index} className='skills--section--card'>
    <div className='skills--section--img'>
      <img src={item.src} alt={item.title} />
    </div>
    <div className='skills--section--card--content'>
      <h3 className='skills--section--title'>{item.title}</h3>
      <p className='skills--section--description'>{item.description}</p>
    </div>
  </div>
))}

      </div>
    </section>
  )
  }

export default Skills
