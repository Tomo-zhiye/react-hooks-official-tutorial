import React, { useState, useMemo, useEffect, } from 'react';
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
            location:[],
        }],
        stepNum: 0,
        xIsNext: true,
    });

    const [isDesc, setIsDesc] = useState(true);
    const history = state.history;
    const current = state.history[state.stepNum].squares;
    const xIsNext = state.xIsNext;
    const result = calculateWinner(current);

    const fillWithXOrO = (num) => {
        const locations = [
            [1, 1],
            [2, 1],
            [3, 1],
            [1, 2],
            [2, 2],
            [3, 2],
            [1, 3],
            [2, 3],
            [3, 3]
        ];
        const current = state.history[state.stepNum];
        const squares = current.squares.slice();
        if (result.winner || squares[num]) {
            return;
        }

        setState(prevValues => {
            squares[num] = prevValues.xIsNext ? 'X' : 'O';
            return(
                {
                    // history: [...prevValues.history, {squares}],
                    history: prevValues.history.concat([{
                        squares,
                        location: locations[num],
                    }]),
                    xIsNext: !prevValues.xIsNext,
                    stepNum: prevValues.history.length,
                }
            );
        });
    }
    // useEffect(() => {
    //     console.log(state)
    // }, [state])


    // const info = useMemo(() => ({ 
    //     current: state.history[state.stepNum],
    //     xIsNext: state.xIsNext,
    // }), [state]);

    const moves = history.map((step, move) => {
        const desc = move 
            ? "Go to move to turn " + move + ", row: " + history[move].location[0] + ", column: " + history[move].location[1]
            :'Go to game start';
        
        return(
            <li  key={move}>
                <button onClick={() => jumpTo(move)}>
                {move === state.stepNum ? <div className="font-bold">{desc}</div> : desc}
                </button>
            </li>
        )
    });

    const jumpTo = (move) => {
        setState(prevValues =>{
            return {
                ...prevValues,
                stepNum: move,
                xIsNext:  (move % 2) === 0,
            }
        });
    }




    return(
        <div className="game">
            <div className="game-board">
                <Board 
                    onClick={ fillWithXOrO }
                    squares={ current }
                    xIsNext={ xIsNext }
                    lines={result.lines}
                />
            </div>
            <div>

            </div>
            <div className='game-info'>
                {/* <div>{}</div> */}
                <ol className={`flex ${isDesc ? "flex-col" : "flex-col-reverse"}`}>{ moves }</ol>
            </div>
            <button onClick={ () => setIsDesc(prevValue => !prevValue) }>
                Sort by: { isDesc ? "Desc" : "Ascend" }
            </button>

        </div>
    );
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );