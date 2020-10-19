import * as Yup from 'yup'

const digitsOnly = (value) => /^\d+$/.test(value)

export default Yup.object().shape({
  name: Yup
    .string()
    .required("Name is required"),
  email: Yup
    .string()
    .email("Must be a valid email address.")
    .required("Must include email address."),
  code: Yup
    .string()
    .required("Authentication Code is Required")
    .min(6, "Authentication Code must be at least 6 characters long.")
    .test('Digits only', 'The field should have digits only', digitsOnly),
  terms: Yup
  .boolean().oneOf([true], "You must accept Terms and Conditions"),
});