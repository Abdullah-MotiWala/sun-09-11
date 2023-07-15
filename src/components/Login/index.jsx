import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userData } from '../../../constants'
import { login, signUp } from '../../redux/userSlice'
import LoginView from './LoginView'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const authReducer = useSelector((state) => state)

    console.log(authReducer)

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
            dispatch(login(true))
            dispatch(signUp({ userName, password }))
            navigate("/")
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <LoginView userName={userName} submitHandler={submitHandler} password={password} setUserName={setUserName} setPassword={setPassword} />
    )
}

export default Login
