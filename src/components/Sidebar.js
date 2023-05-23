import React from "react";
import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";

import { MdMenu } from "react-icons/md";
import { GoDashboard } from "react-icons/go";
import { HiInboxArrowDown } from "react-icons/hi2";

const Sidebar = () => {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();

  return (
    <div className="bg-gray-100 text-blue-primary ">
      <div className="flex space-x-4 justify-center items-center h-12">
        <div
          className="cursor-pointer hover:bg-gray-600/30 p-2 rounded-full"
          onClick={() => collapseSidebar()}
        >
          <MdMenu size={25} />
        </div>
        {!collapsed && <img src="/logo.png" alt="logo" className="h-10" />}
      </div>

      <ProSidebar style={{ background: "transparent" }}>
        <Menu>
          <MenuItem
            icon={<GoDashboard size={30} />}
            style={{ backgroundColor: "#e5e7eb", border: "solid #f1f5f9" }}
            component={<Link to="/account" />}
          >
            {" "}
            Dashboard{" "}
          </MenuItem>

          <MenuItem
            icon={<HiInboxArrowDown size={30} />}
            style={{ backgroundColor: "#e5e7eb", border: "solid #f1f5f9" }}
            component={<Link to="/account/inbox" />}
          >
            Inbox
          </MenuItem>
        </Menu>
      </ProSidebar>
    </div>
  );
};

export default Sidebar;
