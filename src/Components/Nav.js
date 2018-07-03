import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'

export default function () {

    return (
        <div className='header' >
            <h1 className='typewriter'>Shannon Adair </h1> <br />
            <h2 >Web Developer</h2>
            <div className='menu' >
                <Link to='/' className="Link" ><h3>About Me</h3></Link>
                <h4> | </h4>
                <Link to='/skills' className="Link" ><h3>Skills</h3></Link>
                <h4> | </h4>
                <Link to='/projects' className="Link"  ><h3>Projects</h3></Link>
                <h4> | </h4>
                <Link to='/contact' className="Link" ><h3>Contact</h3></Link>
            </div>
        </div>
    )
}