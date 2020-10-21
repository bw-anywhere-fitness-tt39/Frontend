import React from 'react';

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

    <button disabled={disabled}> Submit </button>

    <div className="errors">
        <div>{errors.name}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
        <div>{errors.terms}</div>
        <div>{errors.username}</div>
        <div>{errors.role}</div>
    </div>

</form>
)
}