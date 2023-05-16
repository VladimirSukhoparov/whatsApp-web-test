import React, { useState } from "react";
import ReactModal from "react-modal";
import { getStateInstance } from "../../utils/getState";
import styles from "../styles/Modal.module.scss";

const Modal = ({ setStateInstance }) => {
  const [modalIsOpen, setIsOpen] = useState(true);
  const [idInstance, setIdInstance] = useState("");
  const [apiTokenInstance, setApiTokenInstance] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  const onSignIn = (res) => {
    if (res) {
      localStorage.setItem("idInstance", JSON.stringify(idInstance));
      localStorage.setItem(
        "apiTokenInstance",
        JSON.stringify(apiTokenInstance)
      );
      setStateInstance(JSON.stringify(res.stateInstance));
      closeModal();
    } else alert("Неправильный idInstance/apiTokenInstance");
  };
  const signIn = () => {
    getStateInstance({ idInstance, apiTokenInstance }).then(onSignIn);
  };
  const handleIdInstance = ({ target }) => {
    setIdInstance(target.value);
  };
  const handleApiTokenInstance = ({ target }) => {
    setApiTokenInstance(target.value);
  };

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="SignIn WhatsApp Web"
      className={styles.modal}
      overlayClassName={styles.overlay}
      shouldCloseOnEsc={false}
      ariaHideApp={false}
    >
      <div>
        <div className={styles.modal__heading}></div>
        <div className={styles.modal__body}>
          <p className={styles.modal__title}>Авторизация</p>
          <div className={styles.modal__box}>
            <p>Введите IdInstance:</p>
            <input onChange={handleIdInstance} id="IdInstance" />
          </div>
          <div className={styles.modal__box}>
            <p>Введите ApiTokenInstance:</p>
            <input
              onChange={(e) => handleApiTokenInstance(e)}
              id="ApiTokenInstance"
            />
          </div>
          <button onClick={signIn}>Войти</button>
        </div>
      </div>
    </ReactModal>
  );
};

export default Modal;
