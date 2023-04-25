import { useFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: {
        userid: "",
        password: "",
      },
      validationSchema: Yup.object({
        userid: Yup.string()
          .max(6, "User ID must be shorter than 6 characters")
          .required("Required"),
        password: Yup.string()
          .min(6, "Password must be longer than 6 characters")
          .required("Required"),
      }),
      onSubmit: ({ userid, password }) => {
        alert(`UserID: ${userid}, password: ${password}`);
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <header></header>
      <label htmlFor="userid">UserID</label>
      <input
        value={values.userid}
        onChange={handleChange}
        onBlur={handleBlur}
        id="userid"
        name="userid"
        type="text"
      />
      {touched.userid && errors.userid ? <div>{errors.login}</div> : null}
      <label htmlFor="password">Password</label>
      <input
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
  );
};

export default LoginForm;
