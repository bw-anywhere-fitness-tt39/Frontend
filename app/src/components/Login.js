import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as yup from 'yup'

import React from 'react'

const Login = (props) => {

    // Setting state with an object of username and password
    const [ loginInfo, setLoginInfo ] = useState({
        username: '',
        password: ''
    });

    const [ disabled, setDisabled ] = useState(false);
    // const [ currentUsers, setCurrentUsers ] = useState([]);
    const [ error, setError ] = useState({
        username: '',
        password: ''
    });

    // Validates using correct parameters in schema to username/password to right errors
    const validate = (name, value) => {
        yup
            .reach(schema, name)
            .validate(value)
            .then((res) => {
                setError({
                    ...error,
                    [name]: ''
                })
            })
            .catch((err) => {
                setError({
                    ...error,
                    [name]: err.errors[0]
                })
            })
    };

    // Gives ability to change value of text inputs for username/password
    const textChange = (name, value) => {
        validate(name, value)
        setLoginInfo({
            ...loginInfo,
            [name]: value
        })
    };

    const onChange = (event) => {
        textChange(event.target.name)
    };

    // gives Login button a click function
    const onSubmit = (event) => {
        event.preventDefault()
        const user = {
            username: loginInfo.username,
            password: loginInfo.password
        }
        setLoginInfo({
            username: '',
            password: ''
        })
    };

    useEffect(() => {
        schema.isValid(loginInfo)
        .then((res) => {
            setDisabled(!res)
        })
    }, [loginInfo]);



    return (
        <div>
            <form>
                <label>Username: 
                    <input
                        id='username'
                        type='text'
                        value={loginInfo.username}
                        name='username'
                        placeholder='Username'
                        onChange={onChange}
                    />
                </label>
                <label>
                    <input
                        id='password'
                        type='password'
                        value={loginInfo.password}
                        name='password'
                        password='password'
                        placeholder='Password'
                        onChange={onChange}
                    />
                </label>
                {/* disabled until right amount of characters are typed in */}
                <button disabeled={disabled}>Login</button>
            </form>
                {/* errors for attempting to log in with false info */}
                <p>{error.username}</p>
                <p>{error.password}</p>
        </div>
    )
}

export default Login
