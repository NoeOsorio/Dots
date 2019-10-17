
import React from 'react';
import './Board.css';
import Dot from './boardElements/Dot';
import Line from './boardElements/Line';
import Square from './boardElements/Square';
function Board() {
    let length = 9
    const dots = []
    const lines = [<Line />, <Line />, <Line />]
    for (let index = 0; index < length; index++) {
        dots.push(<div className="dotLine"><Dot size="50px" /> <Line /> <Dot size="50px" /></div>)
        dots.push(<Square />)
        // dots.push(<Line />)
    }
    return (
        <div id="board">

            <div className="dotLine"> <Dot size="50px" /> <Line /> <Dot size="50px" /></div>
            <div className="dotLine">  <Line /> <Dot size="50px" /> </div>
            <div className="dotLine"> <Dot size="50px" /> <Line /> <Dot size="50px" /></div>
            <div className="dotLine"> <Line vertical="true" /> <Square /> <Line vertical="true"/></div>


         
        </div>
    );
}

export default Board;