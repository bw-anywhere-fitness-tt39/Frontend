import * as yup from "yup";

export default yup.object().shape({
    username: yup
        .string()
        .required("Email is required.")
        .min(3, "Email must be at least 3 characters."),
    password: yup
        .string()
        .required("Password is required.")
        .min(6,"Password must be at least 6 characters.")
});