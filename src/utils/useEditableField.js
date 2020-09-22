import { useState } from "react";
import { editExpense } from "actions/monthOverview";
import { useDispatch } from "react-redux";
import { message } from "antd";

const validateNumericalValue = (amount) =>
  amount && /^\d*?[,.]?\d\d?$/.test(amount);

const useEditableField = (initialValue, name, id, isNumerical = false) => {
  const [value, setValue] = useState(initialValue);
  const dispatch = useDispatch();

  const onChange = (value) => {
    if (value !== initialValue) {
      if (isNumerical && !validateNumericalValue(value)) {
        message.warn("Please input a numerical value", 2);
      } else {
        // Make sure numerical values always are formatted with dot, not comma
        const val = isNumerical ? value.toString().replace(/,/g, ".") : value;
        setValue(val);
        dispatch(editExpense(id, name, value));
      }
    }
  };

  return {
    [`${name}Change`]: onChange,
    [`${name}Value`]: value,
  };
};

export default useEditableField;
