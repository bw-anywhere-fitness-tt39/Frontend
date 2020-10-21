import React, { useState, useEffect } from 'react';
import Form from './User_Form';
import Member from './UserInfo';
import * as yup from 'yup';
import axios from 'axios';
import schema from './UserSchema';
import styled from 'styled-components';

const StyledForm = styled.div`

color: black;

`



const initialFormValues = {
  name: "",
  email: "",
  password: "",
  terms: false,
};

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
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
    axios.get(`https://reqres.in/api/users`)
      .then((res) => {
        setUsers(res.results.data);
      })
      .catch((err) => {
        debugger
        console.log(`GET ERROR`);
      });
  };

  const postNewUser = (newUser) => {
    axios.post(`https://reqres.in/api/users`, newUser)
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
      password: formValues.password.trim(),
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
    <h3>Sign Up</h3>

  <Form 
  values={formValues}
  change={inputChange}
  submit={formSubmit}
  errors={formErrors}
  disabled={disabled}
  />
</StyledForm>

  {users.map((userItem) => {
        return <Member key={userItem.id} details={userItem} />;
    })}

  </div>
  );
}