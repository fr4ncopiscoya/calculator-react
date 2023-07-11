import React from "react";
import '../css/ButtonClear.css'

const ButtonClear = (props) => (
    <div div className="btn-clear" onClick={props.Clear} >
        {props.children}
    </div >
);

export default ButtonClear;


