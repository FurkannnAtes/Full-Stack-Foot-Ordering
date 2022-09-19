import Link from "next/link";
import Title from "../../components/ui/Title";
import { Formik } from "formik";
import * as Yup from "yup";

const Register = () => {
  return (
    <div className="w-max mx-auto register-wrapper px-3 px-md-0">
      <Title>
        {" "}
        <h1 className="text-center my-3">Register</h1>
      </Title>
      <div className="row">
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Email cannot be left blank"),
            email: Yup.string()
              .email("This is not a real email")
              .required("Email cannot be left blank"),
            password: Yup.string()
              .min(8, "Your password must be at least 8 characters")
              .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                "Password must contain at least one uppercase, one lowercase, one number and one special character."
              )
              .required("Password cannot be left blank"),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref("password"), null], "Passwords must match.")
              .required("Password cannot be left blank"),
          })}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              resetForm();
            }, 2000);
          }}
        >
          {({
            values,
            errors,
            handleSubmit,
            dirty,
            handleReset,
            touched,
            handleChange,
            isSubmitting,
          }) => (
            <form
              onSubmit={handleSubmit}
              className="col-md-6 mx-auto d-flex flex-column gap-3"
            >
              <input
                id="name"
                type="text"
                placeholder="Full Name"
                value={values.name}
                onChange={handleChange}
                className="py-2 ps-2 border border-warning"
              />
              {errors.name && touched.name && (
                <div className="ps-1  text-danger">{errors.name}</div>
              )}
              <input
                id="email"
                type="email"
                placeholder="E-mail"
                value={values.email}
                onChange={handleChange}
                className="py-2 ps-2 border border-warning"
              />
              {errors.email && touched.email && (
                <div className="ps-1  text-danger">{errors.email}</div>
              )}
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                className="py-2 ps-2 border border-warning"
              />
              {errors.password && touched.password && (
                <div className="ps-1  text-danger">{errors.password}</div>
              )}
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={values.confirmPassword}
                onChange={handleChange}
                className="py-2 ps-2 border border-warning"
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <div className="ps-1  text-danger">
                  {errors.confirmPassword}
                </div>
              )}
              <button
                className="btn btn-warning text-white"
                type="submit"
                disabled={!dirty || isSubmitting}
              >
                Register
              </button>
              <Link href="/auth/login">
                <a className="text-dark">Do you have a account ?</a>
              </Link>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
