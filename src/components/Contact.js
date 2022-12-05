import React from 'react'
import '../style/Contact.css'
import phone from '../images/phone.png'
import email from '../images/email.png'
import location from '../images/location.png'
import facebook from '../images/facebook.png'
import linkedIn from '../images/linkedin.png'
import twitter from '../images/twitter.png'
import { TextField, Grid, Paper, Button,TextareaAutosize } from '@mui/material'
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';


const Contact = () => {

  const paperStyle = { padding: '30px 20px', width: 322,height:'22.5rem',  borderRadius:'1rem' }
  const form = { marginTop: '2rem' }
  const Text = { marginTop: '1rem', Outline:'none', height:"2rem"}
  const Text2 = { marginTop: '3rem', Outline:'none', height:"4rem", width:'19.5rem',paddingLeft:'.5rem'}
  const signup ={marginTop:'2rem', width:'20rem'}

  return (
    <div>
      <div className='contact-card'>
        <div className='contact-sub-card'>
          <div className='contact-box'>
            <h3>Contact Me</h3>
            <p>Conact me on Below details</p>
            {/* <i>{ForwardToInboxIcon}</i> */}
            <a  style={{ color: 'white',textDecoration:'none' }} href='http'><img className='contact-detail'  src={phone} alt='Phone'></img>03419872780</a>
            <a style={{ color: 'white',textDecoration:'none' }} href='http'><img className='contact-detail' src={email} alt='Phone'></img>Makust7@gmail.com</a>
            <a style={{ color: 'white',textDecoration:'none' }} href='http'><img className='contact-detail' src={location} alt='Phone'></img>District Kohat Tehsil Lachi P/O Shakardara</a>
        
            <div className='socail-contact'>
             <a href='https://www.facebook.com/muhammad.sarim.54738943'> <img className='socail-icon' src={facebook} alt='facebook'></img></a>
             <a href='https://www.linkedin.com/in/muhammad-afrasyab-65888b195'> <img className='socail-icon' src={linkedIn} alt='facebook'></img></a>
             <a href='https://twitter.com/MuhAfrasyab?t=SQopB0Ez8coi8NGd3aw7Cw&s=09'>   <img className='socail-icon' src={twitter} alt='facebook'></img></a>
            </div>
          </div>


          <div className='form'>
            <form>

            <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    
                </Grid>
                <Grid style={form}>
                    <form>
                        <TextField  fullWidth label='User' variant="standard" placeholder='Enter Your Name'></TextField>
                        <TextField fullWidth style={Text} type='email' label='Email' variant="standard" placeholder='Enter Your Email'></TextField>
                        <TextareaAutosize placeholder='Message' fullWidth style={Text2}></TextareaAutosize>
                        <Grid align='center'>
                        <Button align='center'  style={signup} variant='contained' color='primary'>Send Me</Button>
                        </Grid>
                    </form>
                </Grid>
            </Paper>

        </Grid>

            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact