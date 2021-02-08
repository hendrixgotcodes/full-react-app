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
                    
                    <Router>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link id="btn_signup" to="/services">Services</Link>
                        </li>
                    </Router>

                </ul>

                <span className={`menu_harmburger ${isSmallScreen === true ? "show" : "hide"}`} onClick={updateHarmburgerMenuIcon}>

                    {isHarmburgerClicked === true ? <FaTimes/> : <FaBars/>}

                </span>

                <ul className={`responsiveMenu ${isHarmburgerClicked === true ? "responsiveMenu--shown" : "responsiveMenu--hidden"}`}>

                    <Router>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link id="btn_signup" to="/services">Services</Link>
                        </li>
                    </Router>

                </ul>



            </center>

        </nav>

    )

}

export default Header;