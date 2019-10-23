import React from 'react';
import './Line.css';

class Line extends React.Component {

    constructor(props) {
        super(props);
        this.chooseLine = this.chooseLine.bind(this)
    }

    chooseLine() {
        this.props.onLineClick(this.props.id)
    }

    render() {
        return (
            <div className="line"
                id={this.props.id}
                style={{
                    height: this.props.vertical ? "100px" : "50px",
                    width: this.props.vertical ? "50px" : "100px"
                }}
                onClick={this.chooseLine}
            >

            </div>
        )
    }
}

export default Line;