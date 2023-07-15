import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./login.css"

const LoginView = (props) => {
    return (
        <div className='wrapper'>
            <label>
                Emails :
                <input className="text-input" type="text" name="email" placeholder='john@mailinator.com' onChange={(e) => { props.setUserName(e.target.value) }} value={props.userName} />
            </label>
            <br />
            <label >
                Password :
                <input className="text-input" style={{ borderRadius: "0" }} type="Password" name="password" placeholder='*******' value={props.password} onChange={(e) => { props.setPassword(e.target.value) }} />
            </label>
            <br />
            <input type="button" value="Login" onClick={props.submitHandler} />
        </div>
    )
}

export default LoginView
