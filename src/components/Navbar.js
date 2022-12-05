import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Paper } from '@mui/material'
import logo from '../images/logo.jpg'

const Navbar = () => {

    const nav = { float: 'Right', width: '100%' }
    const link = { textDecoration: 'none', paddingLeft: '1rem', paddingTop: '1.5rem', color: 'rgb(66, 128, 179)', float: 'right', paddingRight: '2rem' }
    const link2 = { width: '50px', hight: '50px', borderRadius: '1rem', marginLeft: '1rem', marginTop: '.5rem', marginBottom: '.5rem' }

    return (
        <>
            <Grid>
                <Paper style={nav}>

                    {/* <a href='http/logo'><img style={link} src={logo} alt='Logo'></img></a> */}

                    <Link to='/' ><img style={link2} src={logo} alt='Logo'></img></Link>


                    <Link style={link} to='/Contact' >Contact</Link>
                    <Link style={link} to='/Services' >Services</Link>
                    <Link style={link} to='/About' >About</Link>
                    <Link style={link} to='/' >Home</Link>


                </Paper>
            </Grid>

        </>
    )
}

export default Navbar;