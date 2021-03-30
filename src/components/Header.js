import React, {useState, useEffect} from 'react'
import './components.css';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { db, auth} from '../firebase';

const headerImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDCiY5RvXMjlE-9HUDU386hu-Z6exGbdBGRg&usqp=CAU"


function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}


const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));


const Header = ({ currentUser }) => {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);

    const [signUpOpen, setSignUpOpen] = useState(false)
    const [logInOpen, setLogInOpen] = useState(false)

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)

    useEffect(() =>
    {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser)
            {   
                //user has logged in
                setUser(authUser)
                currentUser(authUser);
            }
            else
            {
                //user has logged out
                setUser(null)
            }
        
        return () =>
        {
            //perform some clean up before the function fires again
            unsubscribe()
        }
        
        })
    }, [user, username, ])

    const logIn = (e) =>
    {
        e.preventDefault();
        setLogInOpen(false);

        auth.signInWithEmailAndPassword(email, password)
            .catch((error) => alert(error.message));
    }

    const signUp = (e) =>
    {
        e.preventDefault();
        setSignUpOpen(false)

        auth.createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
            return authUser.user.updateProfile({
                displayName: username
            })
        })
        .catch((error => alert(error.message)))
    }   

    const logOut = () => {
        auth.signOut()
        currentUser(null)
    }

    return (
        <div>
            <div className="header__signInModal">
                <Modal open={signUpOpen} onClose={() => setSignUpOpen(false)}>
                    <div style={modalStyle} className={classes.paper}>
                            <form className="header__modal">
                                <div className="header__modalHeader">
                                    <h1>Sign Up</h1>
                                </div>
                                <input placeholder="email" type="text" value={email} onChange={e => setEmail(e.currentTarget.value)} />
                                <input placeholder="username" type="text" value={username} onChange={e => setUsername(e.currentTarget.value)} />
                                <input placeholder="password" type="text" value={password} onChange={e => setPassword(e.currentTarget.value)} />
                                <Button type="submit" onClick={signUp}>Sign Up</Button>
                            </form>
                    </div>
                </Modal>
            </div>
            <div className="header__loginModal">
                <Modal open={logInOpen} onClose={() => setLogInOpen(false)}>
                    <div style={modalStyle} className={classes.paper}>
                        <div className="header__modalHeader">
                            <form className="header__modal">
                                <div className="header__modalHeader">
                                    <h1>Login</h1>
                                </div>
                                <input placeholder="email" type="text" value={email} onChange={e => setEmail(e.currentTarget.value)} />
                                <input placeholder="password" type="text" value={password} onChange={e => setPassword(e.currentTarget.value)} />
                                <Button type="submit" onClick={logIn}>Log In</Button>
                            </form>
                        </div>
                    </div>
                </Modal>
            </div>
            <div className="header">
                <img className="header__image" src={headerImg} alt={"tic-tac=toe"} />
                <div className="header__logo">
                    <h1>Tic-Tac-Toe</h1>
                </div>
                <div className="header__menu">
                    {!user 
                    ? (
                    <div>
                        <button onClick={() => setLogInOpen(true)}>Login</button>
                        <button onClick={() => setSignUpOpen(true)}>Sign Up</button>
                    </div>)
                    : <button onClick={() => logOut()}>Log Out</button>
                        
                    }
                </div>
            </div>
        </div>
    )
}

export default Header
