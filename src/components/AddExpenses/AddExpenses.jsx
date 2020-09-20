import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import DatePicker from "components/DatePicker/DatePicker";
import { useForm, Controller } from "react-hook-form";
import { addExpense } from "actions/monthOverview";
import cx from "classnames";
import styles from "./AddExpenses.module.scss";

const FormRow = ({ register, control }) => {
  return (
    <div className={styles.formRow}>
      <input
        name={"name"}
        className={cx(styles.input, styles.name)}
        type={"text"}
        ref={register({ required: true })}
      />
      <Controller
        as={<DatePicker />}
        name="timestamp"
        control={control}
        defaultValue=""
      />

      <input
        name={"amount"}
        className={cx(styles.input, styles.amount)}
        type={"number"}
        step={"0.01"}
        ref={register({ required: true })}
      />
      <input
        name={"category"}
        className={cx(styles.input, styles.category)}
        type={"text"}
        ref={register}
      />
    </div>
  );
};

const AddExpenses = ({ setShow, onAddExpense }) => {
  const { handleSubmit, errors, register, control } = useForm();
  const onSubmit = (data) => {
    data.timestamp = dayjs(data.timestamp).unix().toString();
    console.log(data);
    // onAddExpense(data);
    // setShow(false);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Add expenses</h1>
      <div className={styles.form}>
        <div className={styles.formHeading}>
          <div className={styles.name}>Name</div>
          <div className={styles.timestamp}>Date</div>
          <div className={styles.amount}>Value</div>
          <div className={styles.category}>Category</div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormRow register={register} control={control} />
          <div className={styles.errors}>
            {errors.name && (
              <span className={styles.error}>Name is required. </span>
            )}
            {errors.timestamp && (
              <span className={styles.error}>Date is required. </span>
            )}
            {errors.amount && (
              <span className={styles.error}>Value is required. </span>
            )}
          </div>
          <div className={styles.formButtons}>
            <button
              className={styles.cancelButton}
              onClick={() => setShow(false)}
            >
              Cancel
            </button>
            <button type={"submit"} className={styles.saveButton}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

AddExpenses.propTypes = {};

const mapDispatchToProps = (dispatch) => ({
  onAddExpense: (expense) => dispatch(addExpense(expense)),
});

export default connect(null, mapDispatchToProps)(AddExpenses);
