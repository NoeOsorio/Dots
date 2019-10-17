import React from 'react';
import './Line.css';
function Line(props) {

    let chooseLine = () => {
        console.log("Clic on me : " + props.id)
    }

    return (
        <div className="line"
            id={props.id}
            style={{
                height: props.vertical ? "100px" : "50px",
                width: props.vertical ? "50px" : "100px"
            }}
            onClick={chooseLine}
        >

        </div>
    );
}

export default Line;