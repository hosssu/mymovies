import React from "react";
import axios from 'axios';


const CreateDb = (props) => {
    const username = props.username
    const password = props.password

    const create = (event) => {
        event.preventDefault();
        const response = axios.post('http://localhost:3001/api/insert',
            { username: username, password: password });
        console.log(response)
    }
    return (
        <div>
            {create}
        </div>
    )
}

export default CreateDb