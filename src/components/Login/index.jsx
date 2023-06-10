import React, { useState } from 'react'
import { userData } from '../../../constants'
import LoginView from './LoginView'

const Login = () => {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    function submitHandler() {
        try {
            let errorMessage = ("Credentials not found")

            const registeredUser = userData.find((user) => user.email === userName)
            if (!registeredUser)
                throw new Error(errorMessage)

            let isPasswordMatched = registeredUser.password === password
            if (!isPasswordMatched)
                throw new Error(errorMessage)

            alert("successfully logged in")

        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <LoginView userName={userName} submitHandler={submitHandler} password={password} setUserName={setUserName} setPassword={setPassword} />
    )
}

export default Login
