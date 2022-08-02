import React, { useState } from "react";
import style from "./Error.module.css";
import { reducerCases } from "../../utils/Constant";
import { useStateProvider } from "../../utils/StateProvider";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const Error = () => {
  const [{ error, token }, dispatch] = useStateProvider();

  const [show, setShow] = useState(error !== null);

  const clearError = () => {
    dispatch({ type: reducerCases.SET_ERROR, title: null, message: null });
  };
  const clearToken = () => {
    dispatch({ type: reducerCases.SET_TOKEN, token: null });
    window.location.hash = "";
  };
  const handleClose = () => {
    clearError();
    setShow(false);
  };
  const handleToken = () => {
    clearToken();
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{error.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{error.message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleToken}>
            Clear Token
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Error;
