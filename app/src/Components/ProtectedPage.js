import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {connect } from 'react-redux'
import { fetchClasses } from '../state/appActions'

// name, instructor_name, type, intensity,location, date, max_size, duration, signedUp

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
      <>
      <form onSubmit={handleSubmit(onSubmit)}>

        <label>Class Name</label>  
        <input type="text" onChange={changeHandler} placeholder="Name" name="name" ref={register({required: true, maxLength: 80})} />

        <label>Instructor Name</label>  
        <input type="text" onChange={changeHandler} placeholder="Instructor Name" name="instructor_name" ref={register({required: true, maxLength: 80})} />

        <label>Location</label>
        <input type="text" onChange={changeHandler} placeholder="Location" name="location" ref={register({required: true, maxLength: 100})} />

        <label>Date</label>
        <input type="text" onChange={changeHandler} placeholder="MM/DD/YYYY" name="date" ref={register({required: true, maxLength: 100})} />

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

        <label>Exercise Type</label>
        <input type="text" onChange={changeHandler} placeholder="type" name="Exercise Type" ref={register({required: true, maxLength: 30})} />

        <label>Create Class</label>
        <input type="checkbox" onChange={changeHandler} placeholder="" name="signedUp" ref={register({required: true})} />
  
        <br></br>
        <input type="submit" />
      </form>

      <div className='classes'>
        {props.classes.map((item)=>(
          <h1>test</h1>
        ))}
      </div>


      </>
    );
  }

  const mapStateToProps = state => {
    return {
        classes: state.classes
    };
};

  export default connect(mapStateToProps, { fetchClasses })(ProtectedPage);

