import React from "react";
import { Col, Row } from "antd";
import FormRow from "components/AddExpensesModal/FormRow/FormRow";
import styles from "components/AddExpensesModal/AddExpensesModal.module.scss";

const AddExpensesForm = ({
  handleSubmit,
  onSubmit,
  control,
  errors,
    categoryOptions,
}) => (
  <div className={styles.form}>
    <Row gutter={[8, 8]}>
      <Col span={6}>Name</Col>
      <Col span={6}>Date</Col>
      <Col span={6}>Value</Col>
      <Col span={6}>Category</Col>
    </Row>
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRow options={categoryOptions} control={control} />
      <div className={styles.errors}>
        {errors.name && <span>Name is required. </span>}
        {errors.timestamp && <span>Date is required. </span>}
        {errors.amount && <span>Value is required. </span>}
      </div>
    </form>
  </div>
);

export default AddExpensesForm;
