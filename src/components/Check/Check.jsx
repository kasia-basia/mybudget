import React from "react";
import PropTypes from "prop-types";
import styles from "./Check.module.scss";

const Check = ({ checked, onClick, id }) => {
  return (
    <>
      <input
        className={styles.toggle}
        type="checkbox"
        id={id}
        checked={checked}
        onClick={onClick}
      />
      <label htmlFor={id} />
    </>
  );
};

Check.propTypes = {
  checked: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

Check.defaultProps = {
    checked: null,
};

export default Check;
