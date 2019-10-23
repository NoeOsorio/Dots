
import React from 'react';
import './Board.css';
import Dot from './boardElements/Dot';
import Line from './boardElements/Line';
import Square from './boardElements/Square';

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lines: {
                0: 0, 1: 0, 2: 0,
                3: 0, 4: 0, 5: 0, 6: 0,
                7: 0, 8: 0, 9: 0,
                10: 0, 11: 0, 12: 0, 13: 0,
                14: 0, 15: 0, 16: 0,
                17: 0, 18: 0, 19: 0, 20: 0,
                21: 0, 22: 0, 23: 0,
            },
            squares: [
                [0, 3, 4, 7], [1, 4, 5, 8], [2, 5, 6, 9],
                [7, 10, 11, 14], [8, 11, 12, 15], [9, 12, 13, 16],
                [14, 17, 18, 21], [15, 18, 19, 22], [16, 19, 20, 23],
            ],
            score: [],

            turn: true,
        };
        this.handleLineClick = this.handleLineClick.bind(this)
        this.playTurn = this.playTurn.bind(this)
        this.drawBoard = this.drawBoard.bind(this)
        this.squares = [
            React.createRef(), React.createRef(), React.createRef(), 
            React.createRef(), React.createRef(), React.createRef(), 
            React.createRef(), React.createRef(), React.createRef()
        ]


        // this.sqr1 = React.createRef();
        // this.sqr2 = React.createRef();
        // this.sqr3 = React.createRef();
        // this.sqr4 = React.createRef();
        // this.sqr5 = React.createRef();
        // this.sqr6 = React.createRef();
        // this.sqr7 = React.createRef();
        // this.sqr8 = React.createRef();
        // this.sqr9 = React.createRef();
    }

    handleLineClick(id) {
        id = parseInt(id)
        let temp = this.state.lines

        if (!(document.getElementById(id).className === 'player1') && !(document.getElementById(id).className === 'player2')) {
            temp[id] = 1
        } else {
            return
        }

        this.setState({
            lines: temp,
            turn: !this.state.turn,
        })

        for (const i in this.state.squares) {
            if (this.state.squares.hasOwnProperty(i)) {
                const square = this.state.squares[i];
                if (square.includes(id)) {
                    if (square.every(line => this.state.lines[line] !== 0)) {
                        console.log(`Square ${i} completeded by Player`)
                        this.squares[i].current.className = "set-1"
                    }
                    break;
                }
            }
        }

        this.playTurn()
    }

    playTurn() {
        let temp = this.state.lines

        for (let [key, value] of Object.entries(temp)) {
            if (value !== 1 && value !== 2) {
                temp[key] = 2
                break
            }
        }

        this.setState({
            lines: temp,
            turn: !this.state.turn,
        })

        this.drawBoard()
    }

    drawBoard() {
        for (let line in Object.keys(this.state.lines)) {
            if (this.state.lines[line] === 1) {
                document.getElementById(line).className = "player1"
            } else if (this.state.lines[line] === 2) {
                document.getElementById(line).className = "player2"
            }
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <Dot id="0" size="50px" />
                            <Line id="0" onLineClick={this.handleLineClick} turn={this.state.turn} />
                            <Dot id="1" size="50px" />
                            <Line id="1" onLineClick={this.handleLineClick} turn={this.state.turn} />
                            <Dot id="2" size="50px" />
                            <Line id="2" onLineClick={this.handleLineClick} turn={this.state.turn} />
                            <Dot id="3" size="50px" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <Line id="3" onLineClick={this.handleLineClick} vertical="true" turn={this.state.turn} />
                            <Square ref={this.squares[0]} />
                            <Line id="4" onLineClick={this.handleLineClick} vertical="true" turn={this.state.turn} />
                            <Square ref={this.squares[1]} />
                            <Line id="5" onLineClick={this.handleLineClick} vertical="true" turn={this.state.turn} />
                            <Square ref={this.squares[2]} />
                            <Line id="6" onLineClick={this.handleLineClick} vertical="true" turn={this.state.turn} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <Dot id="4" size="50px" />
                            <Line id="7" onLineClick={this.handleLineClick} turn={this.state.turn} />
                            <Dot id="5" size="50px" />
                            <Line id="8" onLineClick={this.handleLineClick} turn={this.state.turn} />
                            <Dot id="6" size="50px" />
                            <Line id="9" onLineClick={this.handleLineClick} turn={this.state.turn} />
                            <Dot id="7" size="50px" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <Line id="10" onLineClick={this.handleLineClick} vertical="true" turn={this.state.turn} />
                            <Square ref={this.squares[3]} />
                            <Line id="11" onLineClick={this.handleLineClick} vertical="true" turn={this.state.turn} />
                            <Square ref={this.squares[4]} />
                            <Line id="12" onLineClick={this.handleLineClick} vertical="true" turn={this.state.turn} />
                            <Square ref={this.squares[5]} />
                            <Line id="13" onLineClick={this.handleLineClick} vertical="true" turn={this.state.turn} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <Dot id="8" size="50px" />
                            <Line id="14" onLineClick={this.handleLineClick} turn={this.state.turn} />
                            <Dot id="9" size="50px" />
                            <Line id="15" onLineClick={this.handleLineClick} turn={this.state.turn} />
                            <Dot id="10" size="50px" />
                            <Line id="16" onLineClick={this.handleLineClick} turn={this.state.turn} />
                            <Dot id="11" size="50px" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <Line id="17" onLineClick={this.handleLineClick} vertical="true" turn={this.state.turn} />
                            <Square ref={this.squares[6]} />
                            <Line id="18" onLineClick={this.handleLineClick} vertical="true" turn={this.state.turn} />
                            <Square ref={this.squares[7]} />
                            <Line id="19" onLineClick={this.handleLineClick} vertical="true" turn={this.state.turn} />
                            <Square ref={this.squares[8]} />
                            <Line id="20" onLineClick={this.handleLineClick} vertical="true" turn={this.state.turn} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <Dot id="12" size="50px" />
                            <Line id="21" onLineClick={this.handleLineClick} turn={this.state.turn} />
                            <Dot id="13" size="50px" />
                            <Line id="22" onLineClick={this.handleLineClick} turn={this.state.turn} />
                            <Dot id="14" size="50px" />
                            <Line id="23" onLineClick={this.handleLineClick} turn={this.state.turn} />
                            <Dot id="15" size="50px" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;