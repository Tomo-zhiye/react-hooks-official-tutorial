import React, { useEffect, useState, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { Board } from './component/Board';
import './index.css';
import { calculateWinner } from './utility'

const Game = () => {
    // const [stepNum, setStepNum] = useState(0);
    // const [xIsNext, setXIsNext] = useState(true);
    // const [isDesc, setIsDesc] = useState(true);
    // const [squares, setSquares] = useState(Array(9).fill(''));
    const [state, setState] = useState({
        history: [{
            squares: (Array(9).fill('')),
        }],
        xIsNext: true,
    });

    const fillWithXOrO = (num) => {
        // const current = history.squares[history.squares.length - 1];
        // const squares = current.concat();
        // if (calculateWinner(squares) || squares[num]) {
        //     console.log(squares[0]);
        //     return;
        // }
        setState(prevValues => {
            prevValues.squares[num] = prevValues.xIsNext ? 'X' : 'O';
            prevValues.xIsNext = !prevValues.xIsNext;
            // return prevValues.concat();
        });
    }

    const current = useMemo(() => 
    (state.history[state.history.length - 1]), 
    [state.history])

    const [h, setH ] = useState();

    useEffect(() =>{
        setH(state.history[state.history.length - 1])
    }, [state.history])
    []
    setState({history: []})
    // const a = state.history[state.history.length - 1]

    return(
        <div className="game">
            <div className="game-board">
                <Board 
                    onClick={ fillWithXOrO }
                    squares={ history.squares }
                    xIsNext={ history.xIsNext }
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