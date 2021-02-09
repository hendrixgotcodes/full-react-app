import React from 'react';
import CardItem from './cardItem';
import '../../css/components/cards.css';


function Cards(){

    return(

        <div className="cards">

            <h1 className="cards_header">Check out these EPIC destinations</h1>
            <div className="cardContainer">
                <div className="cardContainer_wrapper">

                    <ul className="cardItems">
                        <CardItem src="images/img-9.jpg" label="Adventure" link="/services" alt="Beautiful Escape" text="Explore the hidden waterfall" />
                        <CardItem src="images/img-2.jpg" label="Luxury" link="/services" alt="" text="Travel throught the islands of Bali in a private cruise" />
                    </ul>
                    <ul className="cardItems">
                        <CardItem src="images/img-3.jpg" label="Mystery" link="/services" alt="Beautiful Escape" text="Set sail in the atlantic ocean visiting uncharted waters" />
                        <CardItem src="images/img-4.jpg" label="Adventure" link="/services" alt="" text="Experience footaball on the top of the Himilayan mountains" />
                        <CardItem src="images/img-8.jpg" label="Adrenaline" link="/services" alt="" text="Ride throught the sahara desert on a guided camel tour" />
                    </ul>
                    
                </div>
            </div>
            
        </div>

    )

}

export default Cards;