import React, { useState, useEffect } from 'react';
import Form from './Instructor_Form';
import Member from './Instructor_Info';
import * as yup from 'yup';
import axios from 'axios';
import schema from './InstructorSchema';
import styled from 'styled-components';

const StyledForm = styled.div`

color: black;

`



const initialFormValues = {
  name: "",
  email: "",
  code: "",
  terms: false,
};

const initialFormErrors = {
  name: "",
  email: "",
  code: "",
  terms: "",
};

const initialUsers = [];
const initialDisabled = true;

export default function InstructorSignUp() {

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
      password: formValues.code.trim(),
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
    <h3>Instructor Sign Up</h3>

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