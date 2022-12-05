import React from 'react'
import img1 from '../images/image.jpg'
import '../style/About.css'

//  import {Card,CardHeader} from '@mui/material';

const About = () => {
    //  const about={width:'100%',hight:'100%',padding:'0px',margin:'0px',backGroundcolor:'Black'}
  return (
    <div>
        
        <div className='About'>
        <div className='intro-box'>
                <p className='intro'>I am React Developer</p>
                <p className='intro'>Hi, I am Muhammad Afrasyab</p>
                <p>I am intermediate level React Developer and I am looking for a job</p>
                <button className='Hire-btn'>Hire Me</button>
            </div>

            <div className='imag-box'>
                <img className='img' src={img1} alt='My Personal'></img>
            </div>



           


        </div>
        {/* <Card>
            <CardHeader style={about}>
                Welocome to Header
            </CardHeader>
           
        </Card> */}
    </div>
  )
}

export default About;
