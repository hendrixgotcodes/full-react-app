import React, {useEffect, useState} from "react";
import {BrowserRouter as Router,Link} from 'react-router-dom';
import { FaTypo3, FaBars, FaTimes } from "react-icons/fa";


function Header(){

    useEffect(()=>{

        getWindowSize();

    },[])

    const [isSmallScreen, setScreenSize] = useState(window.innerWidth <= 910 ? true : false);
    const [isHarmburgerClicked, setHarmburgerClicked] = useState(false);

    function getWindowSize(){

        window.addEventListener("resize", ()=>{

           setScreenSize(window.innerWidth <= 910 ? true : false);

        })

    }

    function updateHarmburgerMenuIcon(){

        isHarmburgerClicked === true ? setHarmburgerClicked(false) : setHarmburgerClicked(true);

    }
    

    return(

        <nav className="main_navBar">

            <center className="navBar_center">

                <h1>TRVL <FaTypo3/></h1>

                <ul className={`nav_links ${isSmallScreen === true ? "hide" : "show"}`}>
                    
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">Service</Link>
                    </li>
                    <li>
                        <Link to="/about">Products</Link>
                    </li>
                    <li>
                        <Link className="btn_signup" to="/services">Sign Up</Link>
                    </li>

                </ul>

                <span className={`menu_harmburger ${isSmallScreen === true ? "show" : "hide"}`} onClick={updateHarmburgerMenuIcon}>

                    {isHarmburgerClicked === true ? <FaTimes/> : <FaBars/>}

                </span>

                <ul className={`responsiveMenu ${isHarmburgerClicked === true ? "responsiveMenu--shown" : "responsiveMenu--hidden"}`}>

                    <li className="navList" onClick={updateHarmburgerMenuIcon} >
                        <Link to="/">Home</Link>
                    </li>
                    <li className="navList" onClick={updateHarmburgerMenuIcon} >
                        <Link to="/about">Services</Link>
                    </li>
                    <li className="navList" onClick={updateHarmburgerMenuIcon} >
                        <Link to="/services">Products</Link>
                    </li>
                    <li onClick={updateHarmburgerMenuIcon} >
                        <Link className="btn_signup" to="/signup" >Sign Up</Link>
                    </li>

                </ul>



            </center>

        </nav>

    )

}

export default Header;