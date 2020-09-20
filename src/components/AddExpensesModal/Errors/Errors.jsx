import React from "react";
import PropTypes from "prop-types";
import { Alert, Col, Row } from "antd";

const Errors = ({ errors }) => (
  <Row gutter={8}>
    {errors.name && (
      <Col span={7}>
        <Alert message="Name is required" type="error" showIcon />
      </Col>
    )}

    {errors.timestamp && (
      <Col span={7}>
        <Alert message="Date is required" type="error" showIcon />
      </Col>
    )}

    {errors.amount && (
      <Col span={7}>
        <Alert message="Amount is required" type="error" showIcon />
      </Col>
    )}
  </Row>
);

Errors.propTypes = {
  errors: PropTypes.shape({
    amount: PropTypes.string,
    timestamp: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default Errors;
