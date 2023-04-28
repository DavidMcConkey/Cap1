import { useFormik } from "formik";
import * as Yup from "yup";
import "./Signupform.css";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const SignupForm = () => {
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: {
        restaurantname: "",
        fullname: "",
        phone: "",
        password: "",
      },
      validationSchema: Yup.object({
        restaurantname: Yup.string()
          .min(1, "Restaurant Name must be longer than 1 character")
          .required("Required"),
        fullname: Yup.string()
          .min(1, "Name must be longer than 1 character")
          .required("Required"),
        phone: Yup.string()
          .required("required")
          .matches(phoneRegExp, "Phone number is not valid")
          .min(10, "too short")
          .max(10, "too long"),
        password: Yup.string()
          .min(6, "Password must be longer than 6 characters")
          .required("Required"),
      }),
      onSubmit: ({ restaurantname, phone, password, fullname }) => {
        alert(
          `RestName: ${restaurantname},phone: ${phone}, password: ${password}, fullname: ${fullname}`
        );
      },
    });
  return (
    <div className="center">
      <form onSubmit={handleSubmit}>
        <label htmlFor="restaurandname">Restaurant Name:</label>
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
        <label htmlFor="fullname">Full Name:</label>
        <input
          className="inputbox"
          value={values.fullname}
          onChange={handleChange}
          onBlur={handleBlur}
          id="fullname"
          name="fullname"
          type="fullname"
        />
        {touched.fullname && errors.fullname ? (
          <div>{errors.fullname}</div>
        ) : null}
        <label htmlFor="phone">Phone Number:</label>
        <input
          className="inputbox"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          id="phone"
          name="phone"
          type="phone"
        />
        {touched.phone && errors.phone ? <div>{errors.phone}</div> : null}
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
