import React, { useState } from "react";
import styles from "./AddButton.module.scss";
import AddExpenses from "components/AddExpenses/AddExpenses";
import { Modal, Button, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const AddButton = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.wrapper}>
      <Tooltip title="Add expense" color="blue">
        <Button
          type="primary"
          icon={<PlusOutlined />}
          shape="circle"
          size="large"
          onClick={() => {
            setShow(true);
          }}
        />
      </Tooltip>
      <Modal visible={show} closable={false} footer={null}>
        <AddExpenses setShow={setShow} />
      </Modal>
    </div>
  );
};

export default AddButton;
