import React from "react";
import "./style.scss";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";

const LoginForm = ({ handelSend, showRegister }) => {
  const { t } = useTranslation();
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
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
        if (!values.name) {
          errors.name = t("validation.required");
        }

        if (!values.password) {
          errors.password = t("validation.required");
        }

        if (!values.confirmPassword) {
          errors.confirmPassword = t("validation.required");
        }

        if (values.confirmPassword !== values.password) {
          errors.confirmPassword = t("auth.passwordMatchConfirm");
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
                type="text"
                name="name"
                placeholder={t("auth.name")}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <span className="auth_input_wrapper__error">
                {errors.name && touched.name && errors.name}
              </span>
            </div>
            <div className="two_inputs_in_row">
              <div className="input_group input_right">
                <input
                  className="input"
                  type="password"
                  name="password"
                  placeholder={t("constactUs.form.email")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <span className="auth_input_wrapper__error">
                  {errors.password && touched.password && errors.password}
                </span>
              </div>
              <div className="input_group input_left">
                <input
                  className="input "
                  type="password"
                  name="confirmPassword"
                  placeholder={t("auth.confirmPassword")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                />
                <span className="auth_input_wrapper__error">
                  {errors.confirmPassword &&
                    touched.confirmPassword &&
                    errors.confirmPassword}
                </span>
              </div>
            </div>
          </div>

          <div className="form_buttons">
            <button className="submit_button">{t("auth.login")}</button>
            <button
              className="navigate_button"
              onClick={(e) => showRegister("login")}
            >
              {t("auth.haveAccount")}
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
