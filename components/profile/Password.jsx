import Title from "../ui/Title";
import { Formik } from "formik";
import * as Yup from "yup";

const Password = () => {
  return (
    <div>
      <Title>
        <h1 className="text-center text-md-start mt-3 mt-lg-0 py-2 col-12 col-lg-11 mx-auto ">
          Password
        </h1>
      </Title>
      <Formik
        initialValues={{
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object({
          password: Yup.string()
            .required("Password cannot be left blank")
            .min(8, "Password cant be smaller than 8 lenght"),
          confirmPassword: Yup.string()
            .required("Email cannot be left blank")
            .oneOf([Yup.ref("password"), null], "Passwords must match."),
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
            className="col-12 d-flex flex-column gap-3"
            onSubmit={handleSubmit}
          >
            <div className="d-flex justify-content-around w-100  flex-column flex-lg-row">
              <div className="col-12 col-lg-5 mb-3 mb-lg-0 ">
                <input
                  id="password"
                  placeholder="New password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  className="py-2 ps-2 border border-warning col-12"
                />
                {errors.password && touched.password && (
                  <div className="ps-1  text-danger">{errors.password}</div>
                )}
              </div>
              <div className="col-12 col-lg-5 ">
                <input
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  className="py-2 ps-2 border border-warning col-12"
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <div className="ps-1  text-danger">
                    {errors.confirmPassword}
                  </div>
                )}
              </div>
            </div>

            <div className="col-12 col-lg-11 mx-auto">
              <button
                className="bg-warning border-0  rounded-pill p-2 text-white fw-bold profile-setting-submit "
                type="submit"
                disabled={isSubmitting}
              >
                Password Save
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Password;
