
import React from 'react';
import './Board.css';
import Dot from './boardElements/Dot';
import Line from './boardElements/Line';
function Board() {
    let length = 9
    const dots = []
    for (let index = 0; index < length; index++) {
        dots.push(<div className="dotLine"><Dot size="50px"/> <Line /> <Dot size="50px"/></div>)
        // dots.push(<Line />)
    }
    return (
        <div id="board">
            {dots.map((value, index) =>{
                if(index % 3 === 0){
                    return value
                }
                return value
            })}
        </div>
    );
}

export default Board;