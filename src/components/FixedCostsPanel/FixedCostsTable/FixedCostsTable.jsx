import React from "react";
import PropTypes from "prop-types";
import {
  TableRow,
  TableRowHeader,
} from "components/FixedCostsPanel/TableRow/TableRow";
import styles from "./FixedCostsTable.module.scss";
import { isEmpty } from "utils/utils";
import { Empty } from "antd";

const FixedCostsTable = ({ data, editFixedCost }) => {
  return (
    <div className={styles.wrapper}>
      <TableRowHeader />
      {isEmpty(data) ? (
        <Empty />
      ) : (
        data.map((el) => (
          <TableRow rowData={el} key={el.id} editFixedCost={editFixedCost} />
        ))
      )}
    </div>
  );
};

FixedCostsTable.propTypes = {
  setBillStatus: PropTypes.func,
};

export default FixedCostsTable;
