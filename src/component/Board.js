import React from 'react';
import '../index.css';
import { Square } from './Square';
import { calculateWinner } from '../utility';

const Board = props => {
    const renderSquare = num => {
        let color;
        if (props.lines && props.lines.includes(num)) {
            color = "text-red-300";
        } else {
            color = "text-black";
        }
        console.log(color);

        return(
            <Square 
                onClick={ () => props.onClick(num) }
                value={ props.squares[num] }
                color={ color }
            />
        )
    };

    
    const result = calculateWinner(props.squares);
    let status;

    if (result.winner) {
        status =  'Winner: ' + result.winner;
    } else if (!result.winner && !props.squares.includes('')) {
        status =  'Draw';
    } else {
        status = 'Next player: ' + (props.xIsNext ? 'X' : 'O');
    }

    return(
        <div>
            <div className="status">{ status }</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div> 
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div> 
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div> 
        </div>
    );
}

export { Board };