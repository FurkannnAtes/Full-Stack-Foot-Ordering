import Title from "../ui/Title";
import { Formik } from "formik";
import * as Yup from "yup";
const AccountSet = () => {
  return (
    <div>
      <Title>
        <h1 className="text-center text-md-start mt-3 mt-lg-0 py-2 col-12 col-lg-11 mx-auto ">
          Account Setting
        </h1>
      </Title>
      <Formik
        initialValues={{
          name: "",
          phoneNumber: "",
          email: "",
          address: "",
          job: "",
          bio: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Full name cannot be left blank"),
          email: Yup.string()
            .email("This is not a real email")
            .required("Email cannot be left blank"),
          job: Yup.string().required("job cannot be left blank"),
          bio: Yup.string().required("Bio cannot be left blank"),
          phoneNumber: Yup.string()
            .min(11, "Phone number cant be small than 11 length")
            .required("Phone number cannot be left blank"),
          address: Yup.string().required("Address cannot be left blank"),
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
                  id="name"
                  placeholder="Full Name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  className="py-2 ps-2 border border-warning col-12"
                />
                {errors.name && touched.name && (
                  <div className="ps-1  text-danger">{errors.name}</div>
                )}
              </div>
              <div className="col-12 col-lg-5 ">
                <input
                  id="email"
                  placeholder="Your Email Adress"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  className="py-2 ps-2 border border-warning col-12"
                />
                {errors.email && touched.email && (
                  <div className="ps-1  text-danger">{errors.email}</div>
                )}
              </div>
            </div>
            <div className="d-flex justify-content-around w-100 flex-column flex-lg-row">
              <div className="col-12 col-lg-5 mb-3 mb-lg-0">
                <input
                  id="phoneNumber"
                  placeholder="Your Phone"
                  type="text"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  className="py-2 ps-2 border border-warning col-12"
                />
                {errors.phoneNumber && touched.phoneNumber && (
                  <div className="ps-1  text-danger">{errors.phoneNumber}</div>
                )}
              </div>
              <div className="col-12 col-lg-5">
                <input
                  id="address"
                  placeholder="Your Adress"
                  type="text"
                  value={values.address}
                  onChange={handleChange}
                  className="py-2 ps-2 border border-warning col-12"
                />
                {errors.address && touched.address && (
                  <div className="ps-1  text-danger">{errors.address}</div>
                )}
              </div>
            </div>
            <div className="d-flex justify-content-around w-100 flex-column flex-lg-row">
              <div className="col-12 col-lg-5 mb-3 mb-lg-0">
                <input
                  id="job"
                  placeholder="Your Job"
                  type="text"
                  value={values.job}
                  onChange={handleChange}
                  className="py-2 ps-2 border border-warning col-12"
                />
                {errors.job && touched.job && (
                  <div className="ps-1  text-danger">{errors.job}</div>
                )}
              </div>
              <div className="col-12 col-lg-5 mb-3 mb-lg-0">
                <input
                  id="bio"
                  placeholder="Your Bio"
                  type="text"
                  value={values.bio}
                  onChange={handleChange}
                  className="py-2 ps-2 border border-warning col-12"
                />
                {errors.bio && touched.bio && (
                  <div className="ps-1  text-danger">{errors.bio}</div>
                )}
              </div>
            </div>
            <div className="col-12 col-lg-11 mx-auto">
              <button
                className="bg-warning border-0  rounded-pill p-2 text-white fw-bold profile-setting-submit "
                type="submit"
                disabled={isSubmitting}
              >
                Setting Save
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AccountSet;
