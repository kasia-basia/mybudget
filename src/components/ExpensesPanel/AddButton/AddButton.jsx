import React, { useState } from "react";
import styles from "./AddButton.module.scss";
import AddExpenses from "components/AddExpensesModal/AddExpensesModal";
import { Button, Tooltip } from "antd";
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
        <AddExpenses setShow={setShow} show={show}/>
    </div>
  );
};

export default AddButton;
