import React, { useState, useEffect } from 'react';
// import axios from 'axios';
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
    padding: 20%;
`

const StyledLogin = styled.div`
    color: #ffffff;
    background-color: #242943;
    padding: 3%;
    border-radius: 20px;
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
`

const StyledLoginButton = styled.button`
    border-radius: 10px;
    padding: 2% 7%;
    font-size: 1rem;
    font-family: 'Helvetica';

`

// Styled Components End //

const Login = (props) => {

    // Setting state with an object of email and password
    const [ loginInfo, setLoginInfo ] = useState({
        email: '',
        password: ''
    });

    const [ disabled, setDisabled ] = useState(false);
    // const [ currentUsers, setCurrentUsers ] = useState([]);
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
                            <h3>Email: </h3>
                        </label>
                            <StyledInputs
                                id='email'
                                type='text'
                                value={loginInfo.email}
                                name='email'
                                placeholder='Type email here...'
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
                                placeholder='Type password here...'
                                onChange={onChange}
                            />
                    </form>
                        {/* disabled until limitations are met */}
                    <br></br>
                    <StyledLoginButton disabeled={disabled}>Login</StyledLoginButton>
                    {/* errors for attempting to log in with false info */}
                    <p>{error.email}</p>
                    <p>{error.password}</p>
                    </StyledLogin>
                </div>
            )}
        </Spring>
        </StyledImg>
    )
}

export default Login
