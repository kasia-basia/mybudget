import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./EditableCategoryTag.module.scss";
import { Button, Select, Tag, Tooltip } from "antd";
import { getColorFromCategory } from "utils/utils";
import { EditOutlined } from "@ant-design/icons";

const { Option } = Select;

const EditableCategoryTag = ({ categories, category, id, onEditExpense }) => {
  const [isEdited, setIsEdited] = useState(false);
  const [displayedCategory, setDisplayedCategory] = useState(category);

  const handleChange = (option) => {
    setIsEdited(false);
    setDisplayedCategory(option);
    if (option !== category) {
      onEditExpense(id, "category", option);
    }
  };

  return (
    <>
      {isEdited ? (
        <Select
          autoFocus
          bordered={false}
          className={styles.select}
          defaultOpen
          defaultValue={category}
          dropdownMatchSelectWidth={false}
          onBlur={() => setIsEdited(false)}
          onSelect={handleChange}
          showArrow={false}
        >
          {Object.values(categories).map((el) => (
            <Option value={el.name}>
              <Tag
                color={getColorFromCategory(categories, el.name)}
                className={styles.tag}
              >
                {el.name}
              </Tag>
            </Option>
          ))}
        </Select>
      ) : (
        <Tag
          color={getColorFromCategory(categories, category)}
          className={styles.tag}
        >
          {displayedCategory}
        </Tag>
      )}
      {!isEdited && (
        <Tooltip title="Edit">
          <Button
            size="small"
            type="link"
            icon={<EditOutlined />}
            onClick={() => setIsEdited(true)}
          />
        </Tooltip>
      )}
    </>
  );
};

EditableCategoryTag.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
  category: PropTypes.string,
  id: PropTypes.string,
  onEditExpense: PropTypes.func,
};

export default EditableCategoryTag;
