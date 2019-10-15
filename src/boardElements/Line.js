import React from 'react';
import './Line.css';
function Line(props) {

    return (
        <div id="line" 
        style={{ height: props.size ? props.size : "50px"}}>
        </div>
    );
}

export default Line;