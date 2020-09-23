import React from "react";
import { connect } from "react-redux";
import styles from "./Header.module.scss";
import DatePicker from "components/DatePicker/DatePicker";
import { setMonth } from "actions/monthOverview";
import { getCurrentMonthName } from "selectors/monthOverview";

const Header = ({ onSetMonth, currentMonth }) => {
  const handleChange = (date) => {
    onSetMonth(date);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>{currentMonth}</h1>
      <DatePicker picker="month" allowClear={false} onChange={handleChange} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentMonth: getCurrentMonthName(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSetMonth: (date) => dispatch(setMonth(date)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
