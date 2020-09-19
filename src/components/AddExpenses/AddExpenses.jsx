import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { addExpense } from "actions/monthOverview";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { DateUtils } from "react-day-picker";
import dateFnsFormat from "date-fns/format";
import dateFnsParse from "date-fns/parse";
import cx from "classnames";
import "assets/styles/DayPicker.scss";
import styles from "./AddExpenses.module.scss";
import getUnixTime from "date-fns/getUnixTime";

const parseDate = (str, format, locale) => {
  const parsed = dateFnsParse(str, format, new Date(), { locale });
  return DateUtils.isDate(parsed) ? parsed : undefined;
};

const formatDate = (date, format, locale) =>
  dateFnsFormat(date, format, { locale });

const FormRow = ({ register }) => {
  const FORMAT = "MM/dd/yyyy";
  return (
    <div className={styles.formRow}>
      <input
        name={"name"}
        className={cx(styles.input, styles.name)}
        type={"text"}
        ref={register({ required: true })}
      />
      <DayPickerInput
        onDayChange={() => {}}
        formatDate={formatDate}
        format={FORMAT}
        parseDate={parseDate}
        placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
        inputProps={{
          name: "timestamp",
          className: cx(styles.input, styles.timestamp),
          ref: register({ required: true }),
        }}
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
  const { handleSubmit, errors, register } = useForm();
  const onSubmit = (data) => {
      data.timestamp = getUnixTime(
      dateFnsParse(data.timestamp, "MM/dd/yyyy", new Date())
    ).toString();

    onAddExpense(data);
    setShow(false);
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
          <FormRow register={register} />
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
