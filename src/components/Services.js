import React from 'react'
import '../style/Services.css'
import img1 from '../images/Gig2.png'
import img2 from '../images/sowa.png'
import img3 from '../images/HndFree.png'

const Services = () => {
  return (
    <div className='services-section'>
      <h4 className='project-intro'>Projects that I have done for self study</h4>
      <div className='Project-box'>


        <div className='card-header' >
          <a href='http'><img className='first-card' src={img1} alt='Sowa Tool web'></img></a>
          <div>
          <a style={{textDecoration:'none'}} href='https://github.com/Afrasyab11/SEQUIA-Clone.git'> <p className='project-sub'>SEQUOIA CLONE</p></a>
          </div>

        </div>
        <div className='card-header' >
          <a href='http'><img className='first-card' src={img2} alt='Sowa Tool web'></img></a>
          <div>
           <a style={{textDecoration:'none'}} href='https://github.com/Afrasyab11/SowaTool-Clone.git'> <p className='project-sub'>SOWA TOOL CLONE</p></a>
          </div>
        </div>
        <div className='card-header' >
          <a href='http'><img className='first-card' src={img3} alt='Sowa Tool web'></img></a>
          <div >
            <a style={{textDecoration:'none'}} href='https://github.com/Afrasyab11/Headphone-Advertisement.git'><p className='project-sub'>HAND FREE TAMPLATE</p></a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Services
