import React, { useEffect, useState } from "react";
import "./Navbar.css";
import img1 from "../../assets/img1.png";


const Navbar = () => {


    return(
        <nav className='container'>
            <img src={img1} alt="Navbar logo" className="logo" />

        
            <ul className="navbar">
                <li>Home</li>
                <li>Program</li>
                <li>About us</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li><button className="btn">Contact us</button></li>



            </ul>
        </nav>
    )
}

export default Navbar