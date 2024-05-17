import React from 'react'
import data from "../../data/index.json"
import { useHref } from 'react-router-dom'
function MyPortfolio() {
  return (
    <section className='portfolio--section' id='MyPortfolio'>
      <div className='portfolio--container--box'>
      <div className='portfolio--container'>
        <p className='s'>Recent Projects</p>
        <h2 className='section--heading'>My Portfolio</h2>
      </div>
      <div>
        <button onClick={() => window.open("https://github.com/mohandoss21","_blank")} className='btn btn-github'>Visit My github</button>
      </div>
      </div>
      <div className='portfolio--section--container'>
      {data?.portfolio?.map((item, index) => (
  <div key={index} className='portfolio--section--card'>
    <div className='portfolio--section--img'>
      <img src={item.src} alt={item.title} />
    </div>
    <div className='portfolio--section--card--content'>
      <h3 className='portfolio--section--title'>{item.title}</h3>
      <p className='text-md'>{item.description}</p>
    </div>
      <p className='text-sm portfolio--link'><a href="https://internalmarkcalculator.netlify.app/" style={{textDecoration:"none"}}>Link</a> </p>
  </div>
))}
  </div>
    </section>
  )
}

export default MyPortfolio
