import React from 'react';
import '../index.css';
import { Square } from './Square';
import { calculateWinner } from '../utility';


const RenderSquare = props => (
    <Square 
        onClick={ () => props.onClick(props.num) }
        value={ props.squares[props.num] }
    />
);

const Board = props => {
    console.log('From Board: ', props.squares[1]);

    
    const renderSquare = num => (
        <Square 
            onClick={ () => props.onClick(num) }
            value={ props.squares[num] }
        />
    );

    
    const winner = calculateWinner(props.squares);
    let status;

    if (winner) {
        status =  'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (props.xIsNext ? 'X' : 'O');
    }

    return(
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                <RenderSquare
                {...props}
                num={0}
                />
                <RenderSquare
                {...props}
                num={1}
                />
                <RenderSquare
                {...props}
                num={2}
                />
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