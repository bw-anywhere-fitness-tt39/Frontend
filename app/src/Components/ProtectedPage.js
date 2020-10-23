import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {connect } from 'react-redux'
import { fetchClasses } from '../state/appActions'
import styled from 'styled-components';

// name, instructor_name, type, intensity,location, date, max_size, duration, signedUp

// Styled Components Start //

const StyledBackgroundImg = styled.div`
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
  padding-left: 1%;
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
  padding: 1.5% 0;
  font-size: 1rem;
  font-family: 'Helvetica';
  text-align: center;
  color: #ffffff;
  background-color: #242943;
  border: 2px solid #37a6cb;
  transition-duration: 0.4s;
  width: 150px;

  :hover {
    background-color: #37a6cb;
    color: #ffff;
    transition: 0.4s ease-in-out;
    border: 2px solid #37a6cb;
    text-decoration: none;
  }

  @media (max-width: 375px) {
      padding: 4% 8%;
  }
`

const StyledLabels = styled.label`
  margin-right: 1%;
  margin-left: 5%;
`
const StyledDropdowns = styled.select`
  margin: 1%;
  border: none;
  border-radius: 20px;
  width: 15%;
  height: 2.2vh;
  padding-left: 0.5%;
`

const StyledCheckbox = styled.input`
  max-width: 5%;
  margin-bottom: 2%;
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
    duration: 0,
    signedUp: ''
}

const ProtectedPage = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const [formValues, setFormValues] = useState(initialValues)
    const { fetchClasses } = props

    // useEffect(()=> {
    //   fetchClasses()
    // })

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
      <StyledBackgroundImg>
        <ProtectPageDiv>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Add a Class</h2>

            <label>Class Name</label>  
            <ProtectPageInputStyles type="text" onChange={changeHandler} placeholder="Name" name="name" ref={register({required: true, maxLength: 80})} />

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
            <StyledLabels>Intensity</StyledLabels>
            <StyledDropdowns name="intensity" onChange={changeHandler} ref={register({ required: true })}>
              <option value="low">low</option>
              <option value="medium">medium</option>
              <option value="high">high</option>
            </StyledDropdowns>

            <StyledLabels>Duration</StyledLabels>
            <StyledDropdowns name="duration"  onChange={changeHandler} ref={register({ required: true })}>
              <option value="30">30</option>
              <option value="60">60</option>
              <option value="90">90</option>
            </StyledDropdowns>

            <StyledLabels>Max Size</StyledLabels>
            <StyledDropdowns name="max_size" onChange={changeHandler} ref={register({ required: true })}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </StyledDropdowns>

            <br/>
            <label>Exercise Type</label>
            <ProtectPageInputStyles type="text" onChange={changeHandler} placeholder="Type" name="Exercise Type" ref={register({required: true, maxLength: 30})} />

            <br/>
            <label>Create Class</label>
            <StyledCheckbox type="checkbox" onChange={changeHandler} placeholder="" name="signedUp" ref={register({required: true})} />
      
            <br></br>
            <StyledSubmitInput type="submit" />
          </form>
        </ProtectPageDiv>
      </StyledBackgroundImg>
    );
  }

  const mapStateToProps = state => {
    return {
        classes: state.classes
    };
};

  export default connect(mapStateToProps, { fetchClasses })(ProtectedPage);

