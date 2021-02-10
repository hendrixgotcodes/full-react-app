import React from 'react';
import {FaPlayCircle} from 'react-icons/fa'

import Button from '../utils/buttons';
import Cards from '../utils/cards';

import '../../css/pages/index.css';

function IndexPage(){

    return(

        <div className="index">

            <div className="section" id="heroSection">

                <video src="/videos/video-1.mp4" loop muted autoPlay />

                <div className="infoSection">

                    <header>
                        <h1>Adventure Awaits</h1>
                        <p>What are you waiting for?</p>
                    </header>

                    <div className="btn_container">

                        <Button link="/signup" buttonStyle="btn--outline" buttonSize="btn--large" children="Get Started" />
                        <Button link="/services" buttonSize="btn--large" >watch trailer <FaPlayCircle/></Button>

                    </div>

                </div>

            </div>

            <div className="section" id="section2">

                <Cards/>

            </div>

        </div>


    )

}

export default IndexPage;