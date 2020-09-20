import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { addExpense } from "actions/monthOverview";
import styles from "components/AddExpensesModal/AddExpensesModal.module.scss";
import AddExpensesForm from "components/AddExpensesModal/AddExpensesForm/AddExpensesForm";
import { getCategoriesOptions } from "selectors/categories";

const AddExpensesModal = ({ setShow, onAddExpense, categoryOptions, show }) => {
  const { handleSubmit, errors, control } = useForm();
  const onSubmit = (data) => {
    data.timestamp = dayjs(data.timestamp).unix().toString();
    onAddExpense(data);
    setShow(false);
    console.log(data);
  };

  return (
    <Modal
      visible={show}
      closable={false}
      onOk={handleSubmit(onSubmit)}
      okText="Save"
      onCancel={() => setShow(false)}
      width="800px"
    >
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Add expense</h1>
        <AddExpensesForm
          categoryOptions={categoryOptions}
          control={control}
          onSubmit={onSubmit}
          errors={errors}
          handleSubmit={handleSubmit}
        />
      </div>
    </Modal>
  );
};

AddExpensesModal.propTypes = {
  setShow: PropTypes.func,
  onAddExpense: PropTypes.func,
  categoryOptions: PropTypes.arrayOf(PropTypes.string),
  show: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  categoryOptions: getCategoriesOptions(state),
});

const mapDispatchToProps = (dispatch) => ({
  onAddExpense: (expense) => dispatch(addExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpensesModal);
