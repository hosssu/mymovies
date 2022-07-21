import React from "react";

const User = () => {

    var getUser = window.localStorage.getItem('username')
    var getUser = getUser.substring(1, getUser.length - 1)

    return (
        { getUser }
    )

}

export default User