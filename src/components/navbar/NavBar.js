import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { TYPES } from '../../redux/constants';
import './NavBar.css'

export default function Navbar() {
    const login = useSelector(state => state.login)
    const history = useHistory()
    const dispatch = useDispatch()
    console.log(login);
    const logout = () =>{
        dispatch({
            type:TYPES.LOGIN,payload:false
        })
        history.push('/login')
    }
    return (
        <div className="nav">
            <div className="navLeft">
                <i className="navIcon fab fa-facebook-square"></i>
                <i className="navIcon fab fa-twitter-square"></i>
                <i className="navIcon fab fa-pinterest-square"></i>
                <i className="navIcon fab fa-instagram-square"></i>
            </div>
            <div className="navCenter">
                <ul className="navList">
                    <li className="navListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="navListItem">
                        <Link className="link" to="/">ABOUT</Link>
                    </li>
                    <li className="navListItem">
                        <Link className="link" to="/">CONTACT</Link>
                    </li>
                    <li className="navListItem">
                        <Link className="link" to="/write">WRITE</Link>
                    </li>
                    <li className="navListItem">
                        {login.user && <div onClick={logout}>LOGOUT</div>}
                    </li>
                </ul>
            </div>
            <div className="navRight">
                {
                    login.user ? (
                        <Link to="/settings"><img className="navImg" src="https://pbs.twimg.com/profile_images/861500734231261184/kTLRqPhq_400x400.jpg" alt="" /></Link>   
                    ) : (
                        <ul className="navList">
                            <li className="navListItem">
                        <Link className="link" to="/login">
                            OTURUM AÇ
                        </Link>
                            </li>
                            <li className="navListItem">
                        <Link className="link" to="/register">
                            KAYIT OL
                        </Link>
                            </li>
                        </ul>
                    )}
                
                <i className="navSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

