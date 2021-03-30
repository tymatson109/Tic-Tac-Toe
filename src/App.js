import React, { useState } from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import Game from './components/Game';
import './components/components.css';
import Button from '@material-ui/core/Button'

const App = () => {

    const [users, setUsers] = useState(null)
    const [reset, setReset] = useState(false)

    const resetClicked = () => {
        setReset(!reset)
    }

    return (
        <div className="app">
            <div className="app__header">
                <Header currentUser={setUsers}/>
            </div>
            <div className="app__game">
                {users
                ? (
                    <div>
                        <Game reset={reset} />
                        <div className="app__reset">
                            <Button onClick={resetClicked} >Reset</Button>
                        </div>
                    </div>
                )
                : null
                }
            </div>
            <div className="app__footer">
                <Footer users={users} />
            </div>
        </div>
    )
}

export default App
