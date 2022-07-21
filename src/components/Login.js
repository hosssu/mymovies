import React, { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const Login = () => {


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [Success, setSuccess] = useState(false)
    const [show, setShow] = useState('none')

    useEffect(() => {
        window.localStorage.setItem('username', JSON.stringify(username));
    }, [Success])

    const login = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/login',
                { username: username, password: password })
            setSuccess(true)
                ;
            setPassword('');
            console.log(response)
            if (response.data[0] != null) {

            }
            else {
                setErrorMsg('Wrong username or password!')
                setShow('')
            }
        }
        catch (err) {
            console.log(err, errorMsg)
        }
    }




    return (
        <>  {Success ? (
            <section className='ui raised very padded text container segment' style={{ marginTop: '50px', backgroundColor: 'lightgray' }}>
                <div className='LastWatched'>
                    <h2 className='ui header'>You are logged in!</h2><br></br>
                    <a href='/'>Go to home</a>
                </div>
            </section>) : (
            <div>
                <div className='ui raised very padded text container segment' style={{ marginTop: '50px', backgroundColor: 'lightgray' }}>
                    <div className='LastWatched'>
                        <h2 className='ui header'>Log in</h2><br></br>
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
}

export default Login