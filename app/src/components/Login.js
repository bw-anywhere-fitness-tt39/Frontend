import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import schema from './FormSchema';
import styled from 'styled-components';
import { Spring } from 'react-spring/renderprops';

// Styled Components Start //

const StyledImg = styled.div`
    background-image: url('https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
    background-attachment: fixed;
    min-height: 400px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    padding: 10%;

    @media (max-width: 800px){
        padding: 8%;
    }

    @media (max-width: 375px) {
        margin: 0;
        padding: 0;
    }
`

const StyledLogin = styled.div`
    color: #ffffff;
    background-color: #242943;
    padding: 3%;
    border-radius: 20px;
    width: 80%;
    margin: auto;

    @media (max-width: 375px) {
        padding: 4%;
        border-radius: 0px;
        width: 100%;
    }
`

const StyledInputs = styled.input`
    margin: 1%;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.6);
    border: none;
    border-radius: 10px;
    outline: none;
    ::placeholder {
        margin-bottom: 10%;
        position: center;
        top: -10px;
        color: #242943;
        font-family: 'Helvetica';
    }
    :focus {
        background-color: #37a6cb;
        color: #ffff;
    }

    @media (max-width: 375px) {
        width: 70%

    }
`

const StyledLoginButton = styled.button`
    border-radius: 10px;
    padding: 2% 7%;
    font-size: 1rem;
    font-family: 'Helvetica';

    @media (max-width: 375px) {
        padding: 4% 8%;
    }
`

// Styled Components End //

const Login = (props) => {

    // Setting state with an object of username and password
    const [ loginInfo, setLoginInfo ] = useState({
        username: '',
        password: ''
    });

    const [ disabled, setDisabled ] = useState(false);
    // v In case for get.axios request v //
    const [ currentUsers, setCurrentUsers ] = useState([]);
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

    const postInfo = (user) => {
        axios.post(`https://anytime-fitness.herokuapp.com/api/auth/login`, user)
        .then((res) => {
            console.log(res.data)
            setCurrentUsers([...currentUsers, res.data])
        })
        .catch((err) => {
            console.log(err)
        })
    }

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
        postInfo(user)
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
        <StyledImg>
        <Spring
            from={{ opacity: 0, marginTop: - 500 }}
            to={{ opacity: 1, marginTop: 0 }}
        >
            {props => (
                <div style={props}>
                    <StyledLogin>
                        <h1>WELCOME BACK</h1>
                        <h2>Login</h2>
                        <form onSubmit={onSubmit}>
                            <label>
                                <h3>Username: </h3>
                            </label>
                                <StyledInputs
                                    id='username'
                                    type='text'
                                    value={loginInfo.username}
                                    name='username'
                                    placeholder='Type your username here...'
                                    onChange={onChange}
                                />
                            <label>
                                <h3>Password: </h3>
                            </label>
                                <StyledInputs
                                    id='password'
                                    type='password'
                                    value={loginInfo.password}
                                    name='password'
                                    password='password'
                                    placeholder='Type your password here...'
                                    onChange={onChange}
                                />
                        </form>
                            {/* disabled until limitations are met */}
                        <br></br>
                        <StyledLoginButton disabeled={disabled}>Login</StyledLoginButton>
                        {/* errors for attempting to log in with false info */}
                        <p>{error.username}</p>
                        <p>{error.password}</p>
                    </StyledLogin>
                </div>
            )}
        </Spring>
        </StyledImg>
    )
}

export default Login
