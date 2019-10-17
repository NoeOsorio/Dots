
import React from 'react';
import './Square.css';
import Dot from './Dot';
import Line from './Line';
function Square() {
    let length = 9
    const dots = []
    const lines = [<Line />, <Line />, <Line />]
    for (let index = 0; index < length; index++) {
        dots.push(<div className="dotLine"><Dot size="50px"/> <Line /> <Dot size="50px"/></div>)
        // dots.push(<Line />)
    }
    return (
        <div id="square">
        </div>
    );
}

export default Square;