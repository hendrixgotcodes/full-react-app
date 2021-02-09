import React from 'react';
import {Link} from 'react-router-dom';
import '../../css/components/buttons.css';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

function Button({children, type, onClick, buttonStyle, buttonSize, link}){

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(

       <Link to={link}>
            <button onClick={onClick} type={type} className={`btn ${checkButtonStyle} ${checkButtonSize}`}>

                {children}

            </button>
       </Link>

    )

}

export default Button;