import React from "react";
import styles from "components/Sidebar/Sidebar.module.scss";
import { NavLink } from "react-router-dom";
import { Tooltip, Button, Space } from "antd";
import pages from "./pages";

const Sidebar = () => {
  return (
    <div className={styles.wrapper}>
      <Space direction={"vertical"}>
        {pages.map(({ name, icon, path }) => (
          <Tooltip title={name} placement="right" color="blue">
            <NavLink to={path} exact activeClassName={styles.active}>
              <Button type="primary" shape="circle" icon={icon} />
            </NavLink>
          </Tooltip>
        ))}
      </Space>
    </div>
  );
};

export default Sidebar;
