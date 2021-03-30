import React, {useState} from 'react'
import { useEffect } from 'react';

var isX = false;

const Piece = ({reset}) => {
    const [positionClicked, setPositionClicked] = useState(false);

    useEffect(() => {
        setPositionClicked(false)
    }, [reset])

    const clicked = () => 
    {
        setPositionClicked(true);
        isX = !isX
    }

    return (
        <div className="gameboard__cube">
            {!positionClicked
                ? <button className="gameboard__button" onClick={clicked}/>
                : (isX)
                    ? <h1 className="gameboard__piece">X</h1>
                    : <h1 className="gameboard__piece">O</h1>
            }
        </div>
    )
}

export default Piece
