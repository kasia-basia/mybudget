import React from "react";
import styles from "./styles.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </div>
  );
};

export default Sidebar;
