import React from 'react'

const LoginView = (props) => {
    return (
        <>
            <label>
                Emails :
                <input type="text" name="email" placeholder='john@mailinator.com' onChange={(e) => { props.setUserName(e.target.value) }} value={props.userName} />
            </label>
            <br />
            <label >
                Password :
                <input type="Password" name="password" placeholder='*******' value={props.password} onChange={(e) => { props.setPassword(e.target.value) }}/>
            </label>
            <br />
            <input type="button" value="Login" onClick={props.submitHandler}/>
        </>
    )
}

export default LoginView
