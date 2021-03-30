import React from 'react'
import Gameboard from './Gameboard';

const Game = ({reset}) => {

    return (
        <div>
            <Gameboard reset={reset}/>
        </div>
    )
}

export default Game
