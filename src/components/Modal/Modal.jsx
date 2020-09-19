import React from "react";
import styles from "./Modal.module.scss";

const Modal = ({ children, show }) => {
  return show ? (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  ) : null;
};

export default Modal;
