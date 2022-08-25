import React from 'react';
import { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style.css';
import { AuthContext } from '../context/AuthContext';


const Login = () => {

    const [errorMsg, setErrorMsg] = useState('')
    const [show, setShow] = useState('none')

    return (
        <AuthContext.Consumer>{(context) => {

            const { isLoggedIn, username, password, changeAuthStatus, setUsername, setPassword } = context

            const login = async (event) => {
                event.preventDefault();
                try {
                    const response = await axios.post('/login.php',
                        {
                            username: username,
                            password: password
                        })
                    console.log(response.data[0])
                    if (response.data[0] === "A") {
                        setErrorMsg('Wrong username or password!')
                        setShow('')

                    } else {
                        changeAuthStatus(response.data)
                        setPassword('')
                    }
                }
                catch (err) {
                    console.log(err)
                    setErrorMsg('Something went wrong' + ' ' + '"' + err.message + '"')
                    setShow('')
                }
            }


            return (<>  {isLoggedIn ? (
                <section className='LastWatched' style={{ marginTop: '50px', backgroundColor: 'lightgray' }}>
                    <div className='LastWatched'>
                        <h2 style={{ textAlign: 'center' }}>You are now logged in!</h2>

                    </div>
                </section>) : (
                <div>
                    <div className='LastWatched' style={{ marginTop: '50px', backgroundColor: 'lightgray' }}>
                        <div className='LastWatched'>
                            <h2 style={{ textAlign: 'center' }}>Log in</h2><br></br>
                            <form className='ui form' onSubmit={login}>
                                <div className='field'>
                                    <label>Username</label>
                                    <div className='ui large icon input'>
                                        <input type="text"
                                            placeholder='Username'
                                            onChange={(event) => setUsername(event.target.value)}
                                            autoComplete="off"
                                            value={username}
                                            required>
                                        </input>
                                    </div>
                                </div>
                                <div className='field'>
                                    <label>Password</label>
                                    <div className='ui large icon input'>
                                        <input type="password" placeholder='Password'
                                            onChange={(event) => setPassword(event.target.value)}
                                            autoComplete="off"
                                            value={password}
                                            required>
                                        </input>
                                    </div>
                                </div>
                                <div className='errormsg' style={{ display: `${show}` }}><p className='error'>{errorMsg}</p></div>
                                <button className='ui button' onClick={login}>Login</button>
                            </form>


                            <br></br><p>Need an account?<br />
                                <span className='line'>
                                    <Link to='/register'>Register</Link> </span></p>

                        </div>

                    </div>
                </div>
            )}
            </>

            )
        }}

        </AuthContext.Consumer>
    )
}

export default Login