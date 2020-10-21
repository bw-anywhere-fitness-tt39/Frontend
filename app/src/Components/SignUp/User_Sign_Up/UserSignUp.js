import React, { useState, useEffect } from 'react';
import Form from './User_Form';
// import Member from './UserInfo';
import * as yup from 'yup';
import axios from 'axios';
import schema from './UserSchema';
import styled from 'styled-components';

const StyledForm = styled.div`

background-image: url('https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
    background-attachment: fixed;
    min-height: 400px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 122vh;
    padding: 2%;
    text-align: center;
`



const initialFormValues = {
  name: "",
  email: "",
  username: "",
  password: "",
  role: "",
  terms: false,
};

const initialFormErrors = {
  name: "",
  email: "",
  username: "",
  password: "",
  role: "",
  terms: "",
};

const initialUsers = [];
const initialDisabled = true;

export default function UserSignUp() {

  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {
    axios.get(`https://anytime-fitness.herokuapp.com`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        debugger
        console.log(`GET ERROR`);
      });
  };

  const postNewUser = (newUser) => {
    axios.post(`https://anytime-fitness.herokuapp.com`, newUser)
      .then((res) => {
        setUsers([res.data, ...users]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        // debugger
        console.log(`POST ERROR`)
      })
  }


  const inputChange = (name, value) => {

    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
        [name]: err.errors[0]
        });
      });
  
      setFormValues({
        ...formValues,
        [name]: value,
      });
  };


  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      username: formValues.username.trim(),
      password: formValues.password.trim(),
      role: formValues.role.trim(),
    };
    postNewUser(newUser);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

return (
  <div>

  <StyledForm>

  <Form 
  values={formValues}
  change={inputChange}
  submit={formSubmit}
  errors={formErrors}
  disabled={disabled}
  />
</StyledForm>

  {/* {users.map((userItem) => {
        return <Member key={userItem.id} details={userItem} />;
    })} */}

  </div>
  );
}