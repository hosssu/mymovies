import React from "react";
import { createContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

class AuthContextProvider extends React.Component {

    state = {
        isLoggedIn: false,
        password: '',
        username: '',
        token: { token: '', id: '' }
    }

    changeAuthStatus = (value) => {
        this.setState({ isLoggedIn: !this.state.isLoggedIn })
        this.setState(prevState => ({ token: { token: value, ...prevState.id } }))
        window.sessionStorage.setItem('session', JSON.stringify({ token: value, id: this.state.token.id }))
    }

    setUsername = (value) => {
        this.setState({ username: value })
        this.setState(prevState => ({ token: { ...prevState.token, id: value } }))
    }

    setPassword = (value) => {
        this.setState({ password: value })
    }

    setLogin = () => {
        const sessionToken = JSON.parse(window.sessionStorage.getItem('session'))
        if (!sessionToken) {
            return
        } else {
            this.login()
        }
    }

    login = async () => {
        try {
            const response = await axios.post('/loadauth.php',
                {
                    username: JSON.parse(window.sessionStorage.getItem('session')).id
                })
            if (response.data == "Array") {
            } else {
                this.setState({ username: JSON.parse(window.sessionStorage.getItem('session')).id })
                this.setState({ isLoggedIn: !this.state.isLoggedIn })
                this.setState({ token: response.data })
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {



        return (
            <AuthContext.Provider value={{
                ...this.state,
                changeAuthStatus: this.changeAuthStatus,
                setUsername: this.setUsername,
                setPassword: this.setPassword,
                setLogin: this.setLogin,
                login: this.login

            }}>
                {this.props.children}
            </AuthContext.Provider>

        )
    }
}

export default AuthContextProvider;