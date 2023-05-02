import { useFormik } from "formik";
import * as Yup from "yup";
import "./Signupform.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignupForm = () => {
  const navigate = useNavigate();
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: {
        restaurantname: "",
        name: "",
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        restaurantname: Yup.string()
          .min(1, "Restaurant Name must be longer than 1 character")
          .required("Required"),
        name: Yup.string()
          .min(1, "Name must be longer than 1 character")
          .required("Required"),
        email: Yup.string().required("required"),
        password: Yup.string()
          .min(6, "Password must be longer than 6 characters")
          .required("Required"),
      }),
      onSubmit: ({ email, password, name }) => {
        axios
          .post("http://localhost:5000/sign-up", {
            email: email,
            password: password,
            name: name,
          })
          .then(function (response) {
            console.log(response);
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
        <label htmlFor="restaurantname">Restaurant Name:</label>
        <input
          className="inputbox"
          value={values.restaurantname}
          onChange={handleChange}
          onBlur={handleBlur}
          id="restaurantname"
          name="restaurantname"
          type="restaurantname"
        />
        {touched.restaurantname && errors.restaurantname ? (
          <div>{errors.restaurantname}</div>
        ) : null}
        <label htmlFor="name">Full Name:</label>
        <input
          className="inputbox"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          id="name"
          name="name"
          type="name"
        />
        {touched.name && errors.name ? <div>{errors.name}</div> : null}
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
        <label htmlFor="password">Password:</label>
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
        {touched.password && errors.password ? (
          <div>{errors.password}</div>
        ) : null}
        <button type="submit">Sign-Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
