import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
    color: #ffffff;
    background-color: #242943;
    padding: 3%;
    margin: 10% 25%;
    border-radius: 20px;
`

const StyledButton = styled.button`
    border-radius: 10px;
    padding: 2% 7%;
    font-size: 1rem;
    font-family: 'Helvetica';

`

const styledInput = styled.input`

margin: 5% 2%;
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

export default function Form(props) {
    const { values, change, errors, disabled, submit } = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit()
    }

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
    };

return (
    <StyledBox>
        <h2>Sign Up</h2>
    <form onSubmit={onSubmit}>
    <label>
        Name:
        <input
        type="text"
        name="name"
        value={values.name}
        onChange={onChange} 
        />
    </label>

    <br />

    <label>
        Email:
        <input
        type="email"
        name="email" 
        value={values.email}
        onChange={onChange}
        />
    </label>

    <br />

    <label>
        Username:
        <input
        type="text"
        name="username"
        value={values.username}
        onChange={onChange} 
        />
    </label>

    <br />

    <label>
        Password:
        <input
        type="text"
        name="password" 
        value={values.password}
        onChange={onChange}
        />
    </label>

    <br />

    <label>
        Role:
        <select onChange={onChange} value={values.role} name="role">
            <option value="">-Select a role-</option>
            <option value="client">Client</option>
            <option value="instructor">Instructor</option>
        </select>
    </label>

    <br />

    <label>
        Agree to Terms and Conditions 
        <input 
        type="checkbox" 
        id="termsConditions" 
        name="terms" 
        value={values.terms} 
        onChange={onChange}
        />
    </label>

    <br />

    <StyledButton disabled={disabled}> Submit </StyledButton>

    <div className="errors">
        <div>{errors.name}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
        <div>{errors.terms}</div>
        <div>{errors.username}</div>
        <div>{errors.role}</div>
    </div>

</form>
</StyledBox>
)
}