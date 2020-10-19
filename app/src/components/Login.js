import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import schema from './FormSchema';

const Login = (props) => {

    // Setting state with an object of email and password
    const [ loginInfo, setLoginInfo ] = useState({
        email: '',
        password: ''
    });

    const [ disabled, setDisabled ] = useState(false);
    const [ currentUsers, setCurrentUsers ] = useState([]);
    const [ error, setError ] = useState({
        email: '',
        password: ''
    });

    // Validates using correct parameters in schema to email/password to right errors
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

    // Gives ability to change value of text inputs for email/password
    const textChange = (name, value) => {
        validate(name, value)
        setLoginInfo({
            ...loginInfo,
            [name]: value
        })
    };

    // const postInfo = (user) => {
    //     axios.post(`https://reqres.in/api/users`, user)
    //     .then((res) => {
    //         console.log(res.data)
    //         setCurrentUsers([...currentUsers, res.data])
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    // }

    const onChange = (event) => {
        textChange(event.target.name)
    };

    // gives Login button a click function
    const onSubmit = (event) => {
        event.preventDefault()
        const user = {
            email: loginInfo.email,
            password: loginInfo.password
        }
        // postInfo(user)
        setLoginInfo({
            email: '',
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
            <header>Login</header>
            <form onSubmit={onSubmit}>
                <label>Email: 
                    <input
                        id='email'
                        type='text'
                        value={loginInfo.email}
                        name='email'
                        placeholder='Email'
                        onChange={onChange}
                    />
                </label>
                <label>Password: 
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
                {/* disabled until limitations are met */}
                <button disabeled={disabled}>Login</button>
            </form>
                {/* errors for attempting to log in with false info */}
                <p>{error.email}</p>
                <p>{error.password}</p>
        </div>
    )
}

export default Login
