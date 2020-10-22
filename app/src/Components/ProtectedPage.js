import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

// name, instructor_name, type, intensity,location, date, max_size, duration, signedUp

// Styled Components Start //

const ProtectPageDiv = styled.div`
    color: #ffffff;
    background-color: #242943;
    padding: 3%;
    border-radius: 20px;
    width: 80%;
    margin: auto;
    display: flex;
    flex-wrap: column, nowrap;

    @media (max-width: 375px) {
        padding: 4%;
        border-radius: 0px;
        width: 100%;
    }
`

const ProtectPageInputStyles = styled.input`
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

const StyledSubmitInput = styled.input`
    border-radius: 10px;
    padding: 2% 7%;
    font-size: 1rem;
    font-family: 'Helvetica';
    text-align: center;

    @media (max-width: 375px) {
        padding: 4% 8%;
    }
`

// Styled Components End //

const initialValues = {
    name: '',
    instructor_name: '',
    type: '',
    intensity: '',
    location: '',
    date: '',
    max_size: '',
    duration: '',
    signedUp: ''
}

export default function ProtectedPage() {
    const { register, handleSubmit, errors } = useForm();
    const [formValues, setFormValues] = useState(initialValues)

    const changeHandler = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = data =>  {
        console.log(formValues);
    }
    console.log(errors);

    return (
      <ProtectPageDiv>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Add a Class</h2>

          <label>Class Name</label>  
          <ProtectPageInputStyles type="text" onChange={changeHandler} placeholder="Class Name" name="name" ref={register({required: true, maxLength: 80})} />

          <br/>
          <label>Instructor Name</label>  
          <ProtectPageInputStyles type="text" onChange={changeHandler} placeholder="Instructor Name" name="instructor_name" ref={register({required: true, maxLength: 80})} />

          <br/>
          <label>Location</label>
          <ProtectPageInputStyles type="text" onChange={changeHandler} placeholder="Location" name="location" ref={register({required: true, maxLength: 100})} />

          <br/>
          <label>Date</label>
          <ProtectPageInputStyles type="text" onChange={changeHandler} placeholder="MM/DD/YYYY" name="date" ref={register({required: true, maxLength: 100})} />

          <br/>
          <label>Intensity</label>
          <select name="intensity" onChange={changeHandler} ref={register({ required: true })}>
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
          </select>

          <label>Duration</label>
          <select name="duration"  onChange={changeHandler} ref={register({ required: true })}>
            <option value="30">30</option>
            <option value="60">60</option>
            <option value="90">90</option>
          </select>

          <label>Max Size</label>
          <select name="max_size" onChange={changeHandler} ref={register({ required: true })}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>

          <br/>
          <label>Exercise Type</label>
          <ProtectPageInputStyles type="text" onChange={changeHandler} placeholder="Exercise Type" name="Exercise Type" ref={register({required: true, maxLength: 30})} />

          <br/>
          <label>Create Class</label>
          <ProtectPageInputStyles type="checkbox" onChange={changeHandler} placeholder="" name="signedUp" ref={register({required: true})} />
    
          <br></br>
          <StyledSubmitInput type="submit" />
        </form>
      </ProtectPageDiv>
    );
  }

