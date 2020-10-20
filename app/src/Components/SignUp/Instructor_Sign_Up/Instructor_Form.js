import React from 'react';

export default function Instructor_Form(props) {
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
        Authentication Code:
        <input
        type="text"
        name="code" 
        value={values.code}
        onChange={onChange}
        />
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

    <button disabled={disabled}> Submit </button>

    <div className="errors">
        <div>{errors.name}</div>
        <div>{errors.email}</div>
        <div>{errors.code}</div>
        <div>{errors.terms}</div>
    </div>

</form>
)
}