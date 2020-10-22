import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
    color: #ffffff;
    background-color: #242943;
    padding: 3%;
    margin: 10% 25%;
    border-radius: 20px;

    h2 {
        margin-top: -1%;
        margin-bottom: 5%;
        font-size: 2.5rem;
    }
`

const StyledButton = styled.button`
    border-radius: 10px;
    padding: 2% 7%;
    font-size: 1rem;
    font-family: 'Helvetica';

`

const StyledInput = styled.input`

margin: 2%;
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

const StyledLabel = styled.label`

    margin: -2%;

`

const StyledDrop = styled.select`

    margin: 1%;
    border: none;
    border-radius: 20px;
    width: 15%;
    height: 2.2vh;

`

const StyledErrors = styled.div`

    margin-top: 5%;

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

    <StyledLabel>
        Name:
        <StyledInput
        type="text"
        name="name"
        value={values.name}
        onChange={onChange} 
        />
    </StyledLabel>

    <br />

    <StyledLabel>
        Email:
        <StyledInput
        type="email"
        name="email" 
        value={values.email}
        onChange={onChange}
        />
    </StyledLabel>

    <br />

    <StyledLabel>
        Username:
        <StyledInput
        type="text"
        name="username"
        value={values.username}
        onChange={onChange} 
        />
    </StyledLabel>

    <br />

    <StyledLabel>
        Password:
        <StyledInput
        type="password"
        name="password" 
        value={values.password}
        onChange={onChange}
        />
    </StyledLabel>

    <br />

    <StyledLabel>
        Role:
        <StyledDrop onChange={onChange} value={values.role} name="role">
            <option value="">-Select a role-</option>
            <option value="client">Client</option>
            <option value="instructor">Instructor</option>
        </StyledDrop>
    </StyledLabel>

    <br />

    <StyledLabel>
        Agree to Terms and Conditions 
        <StyledInput 
        type="checkbox" 
        id="termsConditions" 
        name="terms" 
        value={values.terms} 
        onChange={onChange}
        />
    </StyledLabel>

    <br />

    <StyledButton disabled={disabled}> Submit </StyledButton>

    <StyledErrors>
        <div>{errors.name}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
        <div>{errors.terms}</div>
        <div>{errors.username}</div>
        <div>{errors.role}</div>
    </StyledErrors>

</form>
</StyledBox>
)
}