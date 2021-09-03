import React from "react";
import { Formik } from "formik";
import { useTranslation } from "react-i18next";
import "./style.scss";

const initialValues = { email: "" };

const SubscribeInput = ({ handelSubscribe }) => {
  const { t } = useTranslation();

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
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          handelSubscribe(values);
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
      }) => (
        <form className="subscribe_wrapper" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder={t("footer.subscribePlaceholder")}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <span className="subscribe_wrapper__error">
            {errors.email && touched.email && errors.email}
          </span>
          <button className="btn" type="submit" disabled={isSubmitting}>
            {t("footer.subscribe")}
          </button>
        </form>
      )}
    </Formik>
  );
};

export default SubscribeInput;
