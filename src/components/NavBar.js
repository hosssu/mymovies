import React from "react";
import { Link } from 'react-router-dom';
import './style.css';

const NavBar = () => {


    var logged = window.localStorage.getItem('username')
    var logged = logged.substring(1, logged.length - 1)
    var empty = () => {
        window.localStorage.setItem('username', JSON.stringify(''))
    }

    return (
        <> {logged ? (
            <div className="ui grey inverted menu">
                <Link className='item' to="/">MyMovies</Link>
                <Link className='item' to="/watched">Watched</Link>
                <Link className='item' to="/friends">Friends</Link>
                <div className="right menu">
                    <div className='log'>{logged}</div>
                    <a className="item" href="/login" onClick={empty}>Log out</a>
                </div>
            </div>
        ) : (
            <div className="ui grey inverted menu">
                <a className="item" href="/login">Log in</a>
            </div>)}</>
    )
}


export default NavBar