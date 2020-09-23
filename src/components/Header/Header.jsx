import React from "react";
import { connect } from "react-redux";
import styles from "./Header.module.scss";
import DatePicker from "components/DatePicker/DatePicker";
import { setMonth } from "actions/monthOverview";
import { getCurrentMonthStart } from "selectors/monthOverview";
import { CalendarOutlined } from "@ant-design/icons";
import {Tooltip} from "antd";
import "components/Header/override.scss";

const Header = ({ onSetMonth, currentMonth }) => {
  const handleChange = (date) => {
    onSetMonth(date);
  };

  return (
    <div className={styles.wrapper} id="monthPicker">

      <CalendarOutlined className={styles.icon}/>
      <Tooltip title="Select month" color="blue">
      <DatePicker
        picker="month"
        allowClear={false}
        defaultValue={currentMonth}
        onChange={handleChange}
        format={"MMMM YYYY"}
        suffixIcon={null}
      />
      </Tooltip>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentMonth: getCurrentMonthStart(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSetMonth: (date) => dispatch(setMonth(date)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
