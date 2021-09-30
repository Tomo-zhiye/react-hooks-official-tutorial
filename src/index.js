import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Board } from './component/Board';
import './index.css';
import { calculateWinner } from './utility'

const Game = () => {
    // const [history, setHistory] = useState({squares: Array(9).fill(null)});
    // const [stepNum, setStepNum] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    // const [isDesc, setIsDesc] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(''));

    const fillWithXOrO = (num) => {
        if (calculateWinner(squares) || squares[num]) {
            console.log(squares[0]);
            return;
        }
        setSquares(prevValues => {
            prevValues[num] = xIsNext ? 'X' : 'O';
            setXIsNext(prevXIsNext => !prevXIsNext);
            return prevValues.concat();
        });
    }
    useEffect(()=>{
console.log(squares)
    }, [squares])

    return(
        <div className="game">
            <div className="game-board">
                <Board 
                    onClick={ fillWithXOrO }
                    squares={ squares }
                    xIsNext={ xIsNext }
                />
            </div>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>

        </div>
    );
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );