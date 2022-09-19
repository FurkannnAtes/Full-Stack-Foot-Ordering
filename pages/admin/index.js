import { Formik } from "formik";
import * as Yup from "yup";
import Title from "../../components/ui/Title";

const Index = () => {
  return (
    <div className="w-max mx-auto login-wrapper px-3 px-md-0">
      <Title>
        {" "}
        <h1 className="text-center my-3">Admin Login</h1>
      </Title>
      <div className="row">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("This is not a real email")
              .required("Email cannot be left blank"),
            password: Yup.string().required("Password cannot be left blank"),
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
              <button
                className="btn btn-warning text-white"
                type="submit"
                disabled={!dirty || isSubmitting}
              >
                Login
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Index;
