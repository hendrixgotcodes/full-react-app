import React from 'react';
import {FaPlayCircle} from 'react-icons/fa'

import Button from '../utils/buttons';

import '../../css/pages/index.css';

function IndexPage(){

    return(

        <div className="section" id="heroSection">

            <video src="/videos/video-1.mp4" loop muted autoPlay />

            <div className="infoSection">

                <header>
                    <h1>Adventure Awaits</h1>
                    <p>What are you waiting for?</p>
                </header>

                <div className="btn_container">

                    <Button buttonStyle="btn--outline" buttonSize="btn--large" children="Get Started" />
                    <Button buttonSize="btn--large" >watch trailer <FaPlayCircle/></Button>

                </div>

            </div>

        </div>

    )

}

export default IndexPage;