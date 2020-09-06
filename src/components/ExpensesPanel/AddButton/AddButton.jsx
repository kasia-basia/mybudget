import React from "react";
import PropTypes from "prop-types";
import styles from "./AddButton.module.scss";

const AddButton = () => {
  return (
    <div className={styles.wrapper}>
      <button onClick={() => {console.log('+');}}>+</button>
    </div>
  );
};

AddButton.propTypes = {};

export default AddButton;
