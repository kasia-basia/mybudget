import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./ExpensesRow.module.scss";
import { Button, Tooltip, Row, Col, Typography } from "antd";
import useEditableField from "utils/useEditableField";
import { DeleteOutlined } from "@ant-design/icons";
import { getCategories } from "selectors/categories";
import { deleteExpense, editExpense } from "actions/monthOverview";
import EditableCategoryTag from "components/ExpensesPanel/EditableCategoryTag/EditableCategoryTag";

const { Paragraph } = Typography;

const ExpenseRow = ({
  rowData,
  categories,
  onDeleteExpense,
  onEditExpense,
}) => {
  const { name, amount, category, id } = rowData;
  const [nameValue, onNameChange] = useEditableField(name, "name", id);
  const [amountValue, onAmountChange] = useEditableField(
    amount,
    "amount",
    id,
    true
  );

  return (
    <div className={styles.rowWrapper}>
      <Row gutter={8}>
        <Col span={11}>
          <Paragraph
            className={styles.paragraph}
            editable={{
              onChange: onNameChange,
            }}
          >
            {nameValue}
          </Paragraph>
        </Col>
        <Col span={5}>
          <Paragraph
            className={styles.paragraph}
            editable={{
              onChange: onAmountChange,
            }}
          >
            {amountValue}
          </Paragraph>
        </Col>
        <Col span={6} className={styles.categoryWrapper}>
          <EditableCategoryTag
            categories={categories}
            category={category}
            id={id}
            onEditExpense={onEditExpense}
          />
        </Col>
        <Col span={2}>
          <div className={styles.buttons}>
            <Tooltip title="Delete" color="blue">
              <Button
                size="small"
                shape="circle"
                type="dashed"
                icon={<DeleteOutlined />}
                onClick={() => onDeleteExpense(id)}
              />
            </Tooltip>
          </div>
        </Col>
      </Row>
    </div>
  );
};

ExpenseRow.propTypes = {
  rowData: PropTypes.shape({
    name: PropTypes.string,
    amount: PropTypes.number,
    category: PropTypes.string,
  }),
};

const mapStateToProps = (state) => ({
  categories: getCategories(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteExpense: (id) => dispatch(deleteExpense(id)),
  onEditExpense: (id, name, value) => dispatch(editExpense(id, name, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseRow);
