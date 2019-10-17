
import React from 'react';
import './Board.css';
import Dot from './boardElements/Dot';
import Line from './boardElements/Line';
import Square from './boardElements/Square';

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            game : [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
        };
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <Dot size="50px" /> <Line id="1" /> <Dot size="50px" /> <Line id="2" /> <Dot size="50px" /> <Line id="3" /> <Dot size="50px" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <Line id="4" vertical="true" /> <Square /> <Line id="5" vertical="true" /> <Square /> <Line id="6" vertical="true" /> <Square /> <Line id="7" vertical="true" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <Dot size="50px" /> <Line id="8" /> <Dot size="50px" /> <Line id="9" /> <Dot size="50px" /> <Line id="10" /> <Dot size="50px" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <Line id="11" vertical="true" /> <Square /> <Line id="12" vertical="true" /> <Square /> <Line id="13" vertical="true" /> <Square /> <Line id="14" vertical="true" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <Dot size="50px" /> <Line id="15" /> <Dot size="50px" /> <Line id="16" /> <Dot size="50px" /> <Line id="17" /> <Dot size="50px" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <Line id="18" vertical="true" /> <Square /> <Line id="19" vertical="true" /> <Square /> <Line id="20" vertical="true" /> <Square /> <Line id="21" vertical="true" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <Dot size="50px" /> <Line id="22" /> <Dot size="50px" /> <Line id="23" /> <Dot size="50px" /> <Line id="24" /> <Dot size="50px" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;