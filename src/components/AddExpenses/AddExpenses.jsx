import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import { Row, Col, Button, Space } from "antd";
import { useForm } from "react-hook-form";
import { addExpense } from "actions/monthOverview";
import styles from "./AddExpenses.module.scss";
import FormRow from "./FormRow/FormRow";

const AddExpenses = ({ setShow, onAddExpense }) => {
  const { handleSubmit, errors, register, control } = useForm();
  const onSubmit = (data) => {
    data.timestamp = dayjs(data.timestamp).unix().toString();
    onAddExpense(data);
    setShow(false);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Add expenses</h1>
      <div className={styles.form}>
        <Row gutter={[8, 8]}>
          <Col span={6}>Name</Col>
          <Col span={6}>Date</Col>
          <Col span={6}>Value</Col>
          <Col span={6}>Category</Col>
        </Row>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormRow register={register} control={control} />
          <div className={styles.errors}>
            {errors.name && <span>Name is required. </span>}
            {errors.timestamp && <span>Date is required. </span>}
            {errors.amount && <span>Value is required. </span>}
          </div>
          <Row justify={"end"} gutter={8}>
            <Space>
              <Button
                type="default"
                shape="round"
                onClick={() => setShow(false)}
              >
                Cancel
              </Button>
              <Button type="primary" shape="round" htmlType="submit">
                Save
              </Button>
            </Space>
          </Row>
        </form>
      </div>
    </div>
  );
};

AddExpenses.propTypes = {
  setShow: PropTypes.func,
  onAddExpense: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onAddExpense: (expense) => dispatch(addExpense(expense)),
});

export default connect(null, mapDispatchToProps)(AddExpenses);
