import { useFormik } from "formik";
import * as Yup from "yup";
import "./Loginform.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const LoginForm = () => {
  const navigate = useNavigate();
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .min(6, "Email must be longer than 6 characters")
          .required("Required"),
        password: Yup.string()
          .min(6, "Password must be longer than 6 characters")
          .required("Required"),
      }),
      onSubmit: ({ email, password }) => {
        axios
          .post("http://localhost:5000/login", {
            email: email,
            password: password,
          })
          .then(function (response) {
            console.log(response.data);
            navigate("/dashboard");
          })
          .catch(function (error) {
            console.log(error, "error");
            if (error.response.status === 401) {
              alert("Invalid credentials");
            }
          });
      },
    });
  return (
    <div className="center">
      <form onSubmit={handleSubmit}>
        <header></header>
        <label htmlFor="email">Email:</label>
        <input
          className="inputbox"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          id="email"
          name="email"
          type="email"
        />
        {touched.email && errors.email ? <div>{errors.email}</div> : null}
        <label htmlFor="password">Password</label>
        <input
          className="inputbox"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          id="password"
          name="password"
          type="password"
        />
        {touched.password && errors.password ? (
          <div>{errors.password}</div>
        ) : null}

        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
