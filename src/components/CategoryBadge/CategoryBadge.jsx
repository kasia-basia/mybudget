import React from "react";
import PropTypes from "prop-types";
import styles from "./CategoryBadge.module.scss";

const CategoryBadge = ({ category }) => (
  <div className={`${styles.badge} ${styles[category]}`}>{category}</div>
);

CategoryBadge.propTypes = {
  category: PropTypes.string,
};

export default CategoryBadge;
