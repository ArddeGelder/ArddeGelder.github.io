import React from "react";
import './Game.css';

class Game extends React.Component {
    render(){
        return(
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
            <div className="game-status">
                {/*TODO*/}
            </div>
            </div>
        );
    }
}

class Board extends React.Component{
    constructor(props){
        super(props);

        
    }

    renderSquare(i) {
        return <Square />;
    }

    render(){
        const status = "Next player: X";

        return(
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

class Square extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            value: null,
        };
    }

    render(){
        return(
            <button className="square" onClick={() => {this.setState({value: 'X'})}} >
                {this.state.value}
            </button>
        );
    }
}

export default Game