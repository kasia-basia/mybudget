import React from "react";
import {
  CalendarOutlined,
  CarryOutOutlined,
  LineChartOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

export default [
  {
    name: "Monthly expenses",
    icon: <CalendarOutlined />,
    path: "/",
  },
  {
    name: "Month summary",
    icon: <CarryOutOutlined />,
    path: "/summary",
  },
  {
    name: "Category overview",
    icon: <PieChartOutlined />,
    path: "/categories",
  },
  {
    name: "Trends",
    icon: <LineChartOutlined />,
    path: "/trends",
  },
];
