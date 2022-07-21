import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style.css';

const Register = () => {

    const USER_REGEX = /^[A-z][A-z0-9-_]{3,10}$/;
    const PWD_REGEX = /^[A-z][A-z0-9-_]{3,10}$/;


    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    const [ValidUsernameReg, setValidUsernameReg] = useState(false)
    const [ValidPasswordReg, setValidPasswordReg] = useState(false)

    const [matchPasswordReg, setMatchPasswordReg] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMessage, setErrMessage] = useState('')
    const [success, setSuccess] = useState(false)

    const [show, setShow] = useState('none')
    const empty = ''


    useEffect(() => {
        setValidUsernameReg(USER_REGEX.test(usernameReg));

    }, [usernameReg])

    useEffect(() => {
        const result = setValidPasswordReg(PWD_REGEX.test(passwordReg));
        setValidMatch(passwordReg === matchPasswordReg);
        console.log(passwordReg)
        console.log(ValidPasswordReg)
    }, [passwordReg, matchPasswordReg])

    useEffect(() => {
        setErrMessage('');
    }, [usernameReg, passwordReg, matchPasswordReg])

    const register = async (event) => {
        event.preventDefault();
        const U1 = USER_REGEX.test(usernameReg);
        const P2 = PWD_REGEX.test(passwordReg);
        if (!U1 || !P2) {
            setErrMessage("Invalid Entry");
            return
        }
        try {
            const response = await axios.post('http://localhost:3306/register',
                {
                    username: usernameReg,
                    password: passwordReg
                })
            setUsernameReg('');
            setPasswordReg('');
            setMatchPasswordReg('');
            setSuccess(true)
            console.log(response)
        }
        catch (err) {
            console.log(err)
            setErrMessage('Something went wrong' + ' ' + '"' + err.message + '"')
            setShow('')
        }
    }



    return (
        <div>
            <div className='ui raised very padded text container segment' style={{ marginTop: '50px', backgroundColor: 'lightgray' }}>
                <div className='LastWatched'>
                    <h2 className='ui header'>Register</h2><br></br>
                    <form className='ui form' onSubmit={register}>
                        <div className='field'>
                            <label>Username
                                {ValidUsernameReg ? <i className='check icon' /> : empty}
                                {ValidUsernameReg || !usernameReg ? empty : <i className='times icon' />}
                            </label>
                            <div className='ui large icon input'>
                                <input type="text" placeholder='Username'
                                    onChange={(event) => setUsernameReg(event.target.value)}
                                    autoComplete="off"
                                    value={usernameReg}
                                    required>
                                </input>
                            </div>
                            <p className={usernameReg && !ValidUsernameReg ? "instructions" : "offscreen"}>
                                4 to 10 characters. Must begin with a letter. No special signs.<br />
                            </p>
                        </div>
                        <div className='field'>
                            <label>Password
                                {ValidPasswordReg ? <i className='check icon' /> : empty}
                                {ValidPasswordReg || !passwordReg ? empty : <i className='times icon' />}
                            </label>
                            <div className='ui large icon input'>
                                <input type="password" placeholder='Password'
                                    onChange={(event) => setPasswordReg(event.target.value)}
                                    autoComplete="off"
                                    value={passwordReg}
                                    required>
                                </input>
                            </div>
                            <p className={passwordReg && !ValidPasswordReg ? "instructions" : "offscreen"}>
                                4 to 10 characters. Must begin with a letter. No special signs.<br />
                            </p>
                        </div>

                        <div className='field'>
                            <label>Confirm password
                                {validMatch && matchPasswordReg ? <i className='check icon' /> : empty}
                                {validMatch || !matchPasswordReg ? empty : <i className='times icon' />}
                            </label>
                            <div className='ui large icon input'>
                                <input type="password" placeholder='Password'
                                    onChange={(event) => setMatchPasswordReg(event.target.value)}
                                    autoComplete="off"
                                    value={matchPasswordReg}
                                    required>
                                </input>
                            </div>
                            <p className={matchPasswordReg && !validMatch ? "instructions" : "offscreen"}>
                                Must match the first password<br />
                            </p>
                        </div>

                        <div className='errormsg' style={{ display: `${show}` }}><p className='error'>{errMessage}</p></div>
                        <button className='ui button' disabled={!ValidUsernameReg || !ValidPasswordReg || !validMatch ? true : false} onClick={register}>Register</button>
                    </form>
                    <br></br><p>Already have an account?<br />
                        <span className='line'>
                            <Link to='/login'>Sign in</Link> </span></p>

                </div>
            </div></div>
    )
}

export default Register