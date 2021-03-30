import React from 'react'
import './components.css';
import Piece from './Piece';

const GamePiece = ({reset}) => {

    return (
        <div className="gameboard__container">
            <Piece reset={reset}/>
            <Piece reset={reset}/>
            <Piece reset={reset}/>
            <Piece reset={reset}/>
            <Piece reset={reset}/>
            <Piece reset={reset}/>
            <Piece reset={reset}/>
            <Piece reset={reset}/>
            <Piece reset={reset}/>
        </div>
    )
}

export default GamePiece
