import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import { FaTypo3, FaBars, FaTimes } from "react-icons/fa";

import Button from '../utils/buttons';

import "../../css/layout/header.css";


function Header(){

    useEffect(()=>{

        getWindowSize();

    },[])

    const [isSmallScreen, setScreenSize] = useState(window.innerWidth <= 910 ? true : false);
    const [isHarmburgerClicked, setHarmburgerClicked] = useState(false);

    function getWindowSize(){

        window.addEventListener("resize", ()=>{

           setScreenSize(window.innerWidth <= 960 ? true : false);

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
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Button buttonStyle = "btn--outline" buttonSize="btn--medium" children="Sign Up" link="/signup" />
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
                        <Link to="/services">Services</Link>
                    </li>
                    <li className="navList" onClick={updateHarmburgerMenuIcon} >
                        <Link to="/products">Products</Link>
                    </li>
                    <li onClick={updateHarmburgerMenuIcon} >
                        <Button buttonStyle = "btn--outline" buttonSize="btn--large" children="Sign Up" link="/signup" />
                    </li>

                </ul>



            </center>

        </nav>

    )

}

export default Header;