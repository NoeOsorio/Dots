import React from 'react';
import './Line.css';
function Line(props) {

    return (
        <div id="line"
            style={{ height : props.vertical ? "100px" : "50px",
                    width : props.vertical ? "50px" : "100px"  }}
            >
        </div>
    );
}

export default Line;