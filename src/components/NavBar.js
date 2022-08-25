import React from "react";
import { Link } from 'react-router-dom';
import './style.css';
import { AuthContext } from "../context/AuthContext";


const NavBar = () => {


    var empty = () => {
        window.localStorage.clear()
        window.sessionStorage.clear()
    }


    return (

        <AuthContext.Consumer>{(context) => {
            const { isLoggedIn, username } = context


            return (
                <section> {isLoggedIn ? (
                    <div className='navbar'>
                        <div className="nav1">
                            <Link className='menuitem' to="/">MyMovies</Link></div>
                        <div className="nav2">
                            <Link className='menuitem' to="/watched">Watched</Link></div>
                        <div className="nav3">
                            <Link className='menuitem' to="/friends">Friends</Link></div>
                        <div className="nav7">
                            <Link className='menuitem' to="/WatchList">Watchlist</Link></div>
                        <div className="nav5">{username}</div>

                        <div className="nav4">
                            <a className="menuitem" href="/" onClick={empty}>Log out</a>
                        </div>
                    </div>
                ) : (
                    <div className='navbar'>
                        <div className="navLogin">
                            <a className='menuitem' href="/login">Log in</a>
                        </div></div>)
                }</section>

            )
        }}

        </AuthContext.Consumer>

    )
}


export default NavBar