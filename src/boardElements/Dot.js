import React from 'react';
import './Dot.css';
function Dot(props) {

    return (
        <div id="dot" 
        style={{ height: props.size ? props.size : "50px", 
        width: props.size ? props.size : "50px" }}>
        </div>
    );
}

export default Dot;