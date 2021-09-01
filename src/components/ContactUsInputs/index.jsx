import React from "react";
import "./style.scss";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";

const ContactUsInputs = ({ handelSend }) => {
  const { t } = useTranslation();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = t("validation.required");
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = t("validation.invalidEmail");
        }
        if (!values.firstName) {
          errors.firstName = t("validation.required");
        }
        if (!values.lastName) {
          errors.lastName = t("validation.required");
        }

        if (!values.message) {
          errors.message = t("validation.required");
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          handelSend(values);
          resetForm({});
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form className="contsact_us_form" onSubmit={handleSubmit}>
          <div className="input_wrapper">
            <input
              className="input_element"
              type="email"
              name="email"
              placeholder={t("constactUs.form.email")}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <span className="input_wrapper__error">
              {errors.email && touched.email && errors.email}
            </span>
          </div>
          <div className="input_wrapper">
            <input
              className="input_element"
              type="text"
              name="firstName"
              placeholder={t("constactUs.form.firstName")}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />
            <span className="input_wrapper__error">
              {errors.firstName && touched.firstName && errors.firstName}
            </span>
          </div>
          <div className="input_wrapper">
            <input
              className="input_element"
              type="text"
              name="lastName"
              placeholder={t("constactUs.form.lastName")}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
            <span className="input_wrapper__error">
              {errors.lastName && touched.lastName && errors.lastName}
            </span>
          </div>

          <div className="input_wrapper">
            <textarea
              name="message"
              className="input_element"
              placeholder={t("constactUs.form.message")}
              id=""
              cols="30"
              rows="10"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            ></textarea>
            <span className="input_wrapper__error">
              {errors.message && touched.message && errors.message}
            </span>
          </div>
          <button className="btn sbmit_button" type="submit">
            {t("constactUs.form.submit")}
          </button>
          {/* <Button
              xs={4}
              className="btn"
              variant="outline-success"
              as="input"
              type="submit"
              value={t("constactUs.form.submit")}
              onClick="handleSubmit()"
            />        */}
        </form>
      )}
    </Formik>
  );
};

export default ContactUsInputs;
