import React from "react"
import "./Board.css"
import Dot from "./boardElements/Dot"
import Line from "./boardElements/Line"
import Square from "./boardElements/Square"

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lines: {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
        12: 0,
        13: 0,
        14: 0,
        15: 0,
        16: 0,
        17: 0,
        18: 0,
        19: 0,
        20: 0,
        21: 0,
        22: 0,
        23: 0
      },
      squares: [
        [0, 3, 4, 7],
        [1, 4, 5, 8],
        [2, 5, 6, 9],
        [7, 10, 11, 14],
        [8, 11, 12, 15],
        [9, 12, 13, 16],
        [14, 17, 18, 21],
        [15, 18, 19, 22],
        [16, 19, 20, 23]
      ],
      score: [],
      turn: false
    }
    this.handleLineClick = this.handleLineClick.bind(this)
    this.playTurn = this.playTurn.bind(this)
    this.drawBoard = this.drawBoard.bind(this)
    this.squares = [
      React.createRef(),
      React.createRef(),
      React.createRef(),
      React.createRef(),
      React.createRef(),
      React.createRef(),
      React.createRef(),
      React.createRef(),
      React.createRef()
    ]
  }

  async handleLineClick(id) {
    console.clear()
    id = parseInt(id)
    let temp = this.state.lines

    if (
      !(document.getElementById(id).className === "player1") &&
      !(document.getElementById(id).className === "player2")
    ) {
      temp[id] = 1
    } else {
      return
    }

    await this.setState({
      lines: temp,
      turn: false
    })


    for (const i in this.state.squares) {
      if (this.state.squares.hasOwnProperty(i)) {
        const square = this.state.squares[i]
        if (square.includes(id)) {
          if (square.every(line => this.state.lines[line] !== 0)) {
            console.log("Complete!")
            this.setState({
              turn: true
            })
            this.squares[i].current.innerHTML = '<div class="set-1"></div>'
          }
          // break
        }
      }
    }

    if (!this.state.turn) {
      this.playTurn()
    } else {
      this.drawBoard()
    }
  }

  playTurn() {
    let temp = this.state.lines
    let id
    let high = 0
    let caminos = []
    let chains = []
    let goodMoves = []
    let bigger



    for (let [key, value] of Object.entries(temp)) {
      let test = temp
      if (value === 0) {
        // console.log(temp)
        let path = this.getPaths([parseInt(key)], temp)
        // console.log(path)
        if(path.length > high){
          high = path.length
        } 
        caminos.push(path)
        // console.log(caminos)
      }
    }

    try {
      console.log(caminos)

      goodMoves = caminos.filter(camino => camino.length === high)
      console.log(goodMoves)
      if(goodMoves.length){

        bigger = goodMoves[Math.floor(Math.random() * goodMoves.length)];
      }
      else{
        bigger = goodMoves[0]
      }
      
      if(!bigger.length){
        console.log("No hay ninguna")
        let valid = []
        for (let [key, value] of Object.entries(temp)) {
          if (value === 0) {
            valid.push(parseInt(key))
          }
        }
        let rand = valid[Math.floor(Math.random() * valid.length)]
        bigger = valid.filter(line => line == rand)
      }
      // console.log(bigger)
      this.turn(bigger, 2)
      // console.log(bigger)
      // console.log(`Best move on id: ${bigger} with ${bigger.length} chains`);
      // temp[bigger.id] = 2
    } catch (error) {
      console.log(bigger)
    }

    // const max = chains.indexOf(Math.max.apply(Math, chains))
    // if (temp[max] === 0) {
    //     temp[max] = 2
    //     id = temp[max]
    // } else {
    //     chains.splice(max, 1)

    // }

   

    if (!this.state.turn) {
      this.playTurn()
    } else {
      this.drawBoard()
    }
    this.drawBoard()
  }

  turn(path, player){
    console.log(path)
    let temp = this.state.lines

    path.forEach(line =>{
      this.state.lines[line] = player
      
  
      for (const i in this.state.squares) {
        if (this.state.squares.hasOwnProperty(i)) {
          const square = this.state.squares[i]
          if (square.includes(line)) {
            console.log(square)
            
            if (square.every(line => this.state.lines[line] !== 0)) {
              console.log("Complete!")
              this.setState({
                turn: false
              })
              this.squares[i].current.innerHTML = '<div class="set-2"></div>'
            }else{
              square.forEach(line => console.log(`Line ${line} with value: ${this.state.lines[line]}`))
            }

          }
        }
      }
      this.setState({
        lines: temp,
        turn: true
      })
    })
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

  countChains(move) {
    var chainCount = 0
    for (const i in this.state.squares) {
      if (this.state.squares.hasOwnProperty(i)) {

        const square = this.state.squares[i]
        if (square.some(line => move[line] === 0)) {
          //Cuadros no completos
          let selected = square.map(line => {
            //Para ver cuantas lineas seleccionadas hay
            if (move[line] !== 0) {
              return line
            }
          })
          selected = selected.filter(item => item)
          // console.log(selected)
          if (selected.length === 3) {
            //Falta un movimiento para cerrar el cuadro
            chainCount = chainCount + 1
          }
        }
      }
    }
    return chainCount
  }

  getPaths(keys, gameState) {
    // console.log(keys)
    keys.forEach(line => {
      // let gameState = this.state.lines
      gameState[line] = 2
      // console.log(this.isClosed(line))
      if (this.isClosed(line)) {
        console.log(`Se puede cerrar Linea ${line}`)
        // for (let [key, value] of Object.entries(gameState)) {
        //   if (value === 0) {
        //     keys.push(parseInt(key))
        //     console.log(keys)

        //   }
        // }
      }
      else {
        keys.splice(keys.indexOf(line), 1)
      }
      gameState[line] = 0
      
    });
    // console.log(keys)
    return keys
  }

  isClosed(id) {
    // console.log(id)
    for (const i in this.state.squares) {
      if (this.state.squares.hasOwnProperty(i)) {
        const square = this.state.squares[i]
        // console.log(square)
        if (square.includes(id)) {
          if (square.every(line => this.state.lines[line] !== 0)) {
            console.log("Complete!")
            return true
          }
          // break
        }
      }
    }
    return false
  }

  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <Dot id="0" size="50px" />
              <Line
                id="0"
                onLineClick={this.handleLineClick}
                turn={this.state.turn}
              />
              <Dot id="1" size="50px" />
              <Line
                id="1"
                onLineClick={this.handleLineClick}
                turn={this.state.turn}
              />
              <Dot id="2" size="50px" />
              <Line
                id="2"
                onLineClick={this.handleLineClick}
                turn={this.state.turn}
              />
              <Dot id="3" size="50px" />
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              <Line
                id="3"
                onLineClick={this.handleLineClick}
                vertical="true"
                turn={this.state.turn}
              />
              <div ref={this.squares[0]}>
                <Square />
              </div>
              <Line
                id="4"
                onLineClick={this.handleLineClick}
                vertical="true"
                turn={this.state.turn}
              />
              <div ref={this.squares[1]}>
                <Square />
              </div>
              <Line
                id="5"
                onLineClick={this.handleLineClick}
                vertical="true"
                turn={this.state.turn}
              />
              <div ref={this.squares[2]}>
                <Square />
              </div>
              <Line
                id="6"
                onLineClick={this.handleLineClick}
                vertical="true"
                turn={this.state.turn}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <Dot id="4" size="50px" />
              <Line
                id="7"
                onLineClick={this.handleLineClick}
                turn={this.state.turn}
              />
              <Dot id="5" size="50px" />
              <Line
                id="8"
                onLineClick={this.handleLineClick}
                turn={this.state.turn}
              />
              <Dot id="6" size="50px" />
              <Line
                id="9"
                onLineClick={this.handleLineClick}
                turn={this.state.turn}
              />
              <Dot id="7" size="50px" />
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              <Line
                id="10"
                onLineClick={this.handleLineClick}
                vertical="true"
                turn={this.state.turn}
              />
              <div ref={this.squares[3]}>
                <Square />
              </div>
              <Line
                id="11"
                onLineClick={this.handleLineClick}
                vertical="true"
                turn={this.state.turn}
              />
              <div ref={this.squares[4]}>
                <Square />
              </div>
              <Line
                id="12"
                onLineClick={this.handleLineClick}
                vertical="true"
                turn={this.state.turn}
              />
              <div ref={this.squares[5]}>
                <Square />
              </div>
              <Line
                id="13"
                onLineClick={this.handleLineClick}
                vertical="true"
                turn={this.state.turn}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <Dot id="8" size="50px" />
              <Line
                id="14"
                onLineClick={this.handleLineClick}
                turn={this.state.turn}
              />
              <Dot id="9" size="50px" />
              <Line
                id="15"
                onLineClick={this.handleLineClick}
                turn={this.state.turn}
              />
              <Dot id="10" size="50px" />
              <Line
                id="16"
                onLineClick={this.handleLineClick}
                turn={this.state.turn}
              />
              <Dot id="11" size="50px" />
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              <Line
                id="17"
                onLineClick={this.handleLineClick}
                vertical="true"
                turn={this.state.turn}
              />
              <div ref={this.squares[6]}>
                <Square />
              </div>
              <Line
                id="18"
                onLineClick={this.handleLineClick}
                vertical="true"
                turn={this.state.turn}
              />
              <div ref={this.squares[7]}>
                <Square />
              </div>
              <Line
                id="19"
                onLineClick={this.handleLineClick}
                vertical="true"
                turn={this.state.turn}
              />
              <div ref={this.squares[8]}>
                <Square />
              </div>
              <Line
                id="20"
                onLineClick={this.handleLineClick}
                vertical="true"
                turn={this.state.turn}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <Dot id="12" size="50px" />
              <Line
                id="21"
                onLineClick={this.handleLineClick}
                turn={this.state.turn}
              />
              <Dot id="13" size="50px" />
              <Line
                id="22"
                onLineClick={this.handleLineClick}
                turn={this.state.turn}
              />
              <Dot id="14" size="50px" />
              <Line
                id="23"
                onLineClick={this.handleLineClick}
                turn={this.state.turn}
              />
              <Dot id="15" size="50px" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Board
