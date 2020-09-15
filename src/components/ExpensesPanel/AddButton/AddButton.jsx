import React, { useState } from "react";
import Modal from "components/Modal/Modal";
import styles from "./AddButton.module.scss";

const AddButton = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        onClick={() => {
          setShow(true);
        }}
      >
        +
      </button>
      <Modal show={show} setShow={setShow}>
        This is modal text!
      </Modal>
    </div>
  );
};

export default AddButton;
