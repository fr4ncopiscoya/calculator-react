import React from "react";
import '../css/Button.css'

function Button(props) {

    const Operator = val => {
        return isNaN(val) && (val !== '.') && (val !== '=');
    };
    return (
        <>
            <div className={`button-container ${Operator(props.children) ? 'operator' : null}`} onClick={() => props.Click(props.children)}>
                {props.children}
            </div>
        </>
    )
}

export default Button;