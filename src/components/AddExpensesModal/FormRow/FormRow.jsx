import React from "react";
import { Col, Input, InputNumber, Row, Select } from "antd";
import { Controller } from "react-hook-form";
import DatePicker from "components/DatePicker/DatePicker";
import dayjs from "dayjs";

const { Option } = Select;

const FormRow = ({ control, options }) => (
  <Input.Group>
    <Row gutter={[8, 8]}>
      <Col span={6}>
        <Controller
          as={<Input />}
          name="name"
          control={control}
          defaultValue={""}
          rules={{ required: true }}
        />
      </Col>
      <Col span={6}>
        <Controller
          as={<DatePicker style={{ width: "100%" }} />}
          name="timestamp"
          control={control}
          defaultValue={dayjs(new Date())}
          rules={{ required: true }}
        />
      </Col>
      <Col span={6}>
        <Controller
          as={<InputNumber step={0.1} style={{ width: "100%" }} />}
          name={"amount"}
          control={control}
          defaultValue={""}
          rules={{ required: true }}
        />
      </Col>
      <Col span={6}>
        <Controller
          as={
            <Select style={{ width: "100%" }}>
              {options.map((el) => (
                <Option value={el} key={el}>
                  {el}
                </Option>
              ))}
            </Select>
          }
          name="category"
          control={control}
          defaultValue={""}
        />
      </Col>
    </Row>
  </Input.Group>
);

export default FormRow;
