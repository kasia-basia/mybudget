import React from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import styles from "./ExpensesRow.module.scss";
import { Tag, Space, Button, Tooltip } from "antd";
import { getColorFromCategory } from "utils/utils";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { getCategories } from "selectors/categories";
import { deleteExpense } from "actions/monthOverview";

const ExpenseRow = ({ rowData, categories, onDeleteExpense }) => {
  const { name, amount, category, id } = rowData;

  return (
    <div className={styles.rowWrapper}>
      <div className={styles.name}> {name}</div>
      <div className={styles.amount}> {amount}</div>
      <div className={styles.category}>
        <Tag color={getColorFromCategory(categories, category)}>{category}</Tag>
      </div>
      <div className={styles.buttons}>
        <Space>
          <Tooltip title="Edit" color="blue">
            <Button
              size="small"
              shape="circle"
              type="dashed"
              icon={<EditOutlined />}
            />
          </Tooltip>
          <Tooltip title="Delete" color="blue">
            <Button
              size="small"
              shape="circle"
              type="dashed"
              icon={<DeleteOutlined />}
              onClick={() => {
                onDeleteExpense(id);
                // message.success("Item deleted", 2);
              }}
            />
          </Tooltip>
        </Space>
      </div>
    </div>
  );
};

ExpenseRow.propTypes = {
  rowData: propTypes.shape({
    name: propTypes.string,
    amount: propTypes.number,
    category: propTypes.string,
  }),
};

const mapStateToProps = (state) => ({
  categories: getCategories(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteExpense: (id) => dispatch(deleteExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseRow);
