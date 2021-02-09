import React from 'react'
import {Link} from 'react-router-dom';

function CardItem({src, alt, text, link, label}){

    return(

        <>

            <li className="cardItem">

                <Link rel="stylesheet" to={link} className="cardItem_link">

                    <figure className="cardItem_imageWrap" data-category={label}>
                        <img src={src} alt={alt} className="cardItem_image"/>
                    </figure>
                    <div className="cardItem_info">
                        <h1 className="cardItem_text">{text}</h1>
                    </div>

                </Link>

            </li>

        </>

    )

}

export default CardItem;