import React, { useState } from "react";
import ReactModal from "react-modal";
import styles from "../styles/Modal.module.scss";
import { useApi } from "@/hooks/useApi";

const Modal = ({setChats, setAvatar}) => {
  const [modalIsOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  const api = useApi();
  const [idInstance, setIdInstance] = useState("");
  const [apiTokenInstance, setApiTokenInstance] = useState("");

  const onSignIn = (res) => {
    if (res) {
      localStorage.setItem("idInstance", JSON.stringify(idInstance));
      localStorage.setItem(
        "apiTokenInstance",
        JSON.stringify(apiTokenInstance)
      );
      localStorage.setItem("stateInstance", JSON.stringify(res.stateInstance));
      api.getChats({ idInstance, apiTokenInstance }).then((res) => setChats(res));
      api
      .getSettings({ idInstance, apiTokenInstance })
      .then((res) =>{localStorage.setItem("userID", JSON.stringify(res.wid));
     //api.getAvatar({ res.wid}).then((res) => setAvatar(res.urlAvatar)); 
    });

      closeModal();
    }
  };
  const signIn = () => {
    api.getState({ idInstance, apiTokenInstance }).then(onSignIn);
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
