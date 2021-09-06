import React, { useState } from "react";
import { db } from "./../../firebase";
import "./style.scss";
import { useTranslation } from "react-i18next";
import { Modal, Button } from "react-bootstrap";

const InterestForm = (props) => {
  const { t } = useTranslation();

  const [field, setField] = useState();
  const [percent, setPercent] = useState();

  const handleSubmit = (e) => {
    db.collection("InterestForm").add({
      field,
      percent,
    });
    setField("");
    setPercent("");
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {t("userProfile.fieldInterest.title")}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          className="input_element"
          type="text"
          name="field"
          placeholder={t("userProfile.fieldInterest.field")}
          onChange={(e) => setField(e.target.value)}
          value={field || ""}
          required
        />
      </Modal.Body>
      <Modal.Body>
        <input
          className="input_element"
          type="text"
          name="value"
          placeholder={t("userProfile.fieldInterest.value")}
          onChange={(e) => setPercent(e.target.value)}
          value={percent || ""}
          required
        />
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="submit"
          type="submit"
          onClick={() => handleSubmit() + props.onHide()}
        >
          {t("constactUs.form.submit")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InterestForm;
