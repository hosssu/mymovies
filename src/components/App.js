import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import NavBar from './NavBar';
import Watched from './watched';
import Friends from './Friends'
import Home from './home'
import Login from './Login';
import Register from './Register';
import WatchList from './WatchList';
import { AuthContext } from "../context/AuthContext";
import { useEffect } from "react";
import { useContext } from "react";

const App = () => {
    const { setLogin, } = useContext(AuthContext)

    useEffect(() => {
        setLogin();
    }, [])


    return (
        <div className='mein'>

            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/watched' element={<Watched />} />
                    <Route path='/friends' element={<Friends />} />
                    <Route path='/WatchList' element={<WatchList />} />
                    <Route path='/login' element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>

        </div>

    )
}

export default App;