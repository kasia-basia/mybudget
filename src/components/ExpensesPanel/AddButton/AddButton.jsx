import React, { useState } from "react";
import styles from "./AddButton.module.scss";
import AddExpenses from "components/AddExpenses/AddExpenses";
import { Modal } from "antd";

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
      <Modal visible={show} closable={false} footer={null}>
        <AddExpenses setShow={setShow} />
      </Modal>
    </div>
  );
};

export default AddButton;
