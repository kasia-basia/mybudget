import React from "react";
import styles from "./Modal.module.scss";

const Modal = ({ children, show, setShow }) => {
  return show ? (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button
          className={styles.modalClose}
          type="button"
          onClick={() => setShow(false)}
        >
          X
        </button>
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  ) : null;
};

export default Modal;
