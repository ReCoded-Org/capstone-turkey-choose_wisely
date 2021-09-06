import React from "react";
import "./style.scss";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";

const LoginForm = ({ handelSend, showRegister }) => {
  const { t } = useTranslation();
  const initialValues = {
    email: "",
    password: "",
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
        if (!values.password) {
          errors.password = t("validation.required");
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
        <form className="form_Section" onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="input_group">
              <input
                className="input"
                type="email"
                name="email"
                placeholder={t("auth.email")}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <span className="auth_input_wrapper__error">
                {errors.email && touched.email && errors.email}
              </span>
            </div>
            <div className="input_group">
              <input
                className="input"
                type="password"
                name="password"
                placeholder={t("auth.password")}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <span className="auth_input_wrapper__error">
                {errors.password && touched.password && errors.password}
              </span>
            </div>
          </div>
          <div className="form_buttons">
            <button className="submit_button"> {t("auth.login")}</button>
            <button
              className="navigate_button"
              onClick={(e) => showRegister("register")}
            >
              {t("auth.noAccount")}
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
