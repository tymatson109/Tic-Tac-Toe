import React from 'react'
import GamePiece from './GamePiece';

const Gameboard = ({reset}) => {

    return (
        <div className="gameboard">
            <GamePiece reset={reset}/>
        </div>
    )
}

export default Gameboard
