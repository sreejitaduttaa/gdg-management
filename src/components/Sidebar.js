import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ListIcon from "@mui/icons-material/List";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RenameIcon from "@mui/icons-material/DriveFileRenameOutline";
import MetadataIcon from "@mui/icons-material/Info";
import ArchiveIcon from "@mui/icons-material/Archive";
import AddIcon from "@mui/icons-material/Add";
import GraphIcon from "@mui/icons-material/BarChart";

const SidebarComponent = ({ collapsed, setCollapsed }) => {
  const location = useLocation();

  const menuItemStyles = (path) => ({
    backgroundColor: location.pathname === path ? "#0d47a1" : "inherit",
    color: location.pathname === path ? "#fff" : "#0d47a1",
    borderRadius: "8px",
    margin: "5px 5px",
    padding: "10px 10px",
    transition: "background-color 0.3s ease, color 0.3s ease",
  });

  return (
    <Sidebar
      collapsed={collapsed}
      transitionDuration={300}
      rootStyles={{
        "& .ps-sidebar-container": {
          height: "100vh",
          minHeight: "100vh", 
          position: "fixed",
          top: 0, 
          left: 0,
          width: collapsed ? "70px" : "280px",
          background: "linear-gradient(145deg, #e3f2fd, #bbdefb)",
          borderRadius: "16px",
          boxShadow: "4px 8px 20px rgba(0,0,0,0.2)",
          margin: "20px",
          padding: collapsed ? "10px" : "20px",
          transition: "width 0.3s ease, padding 0.3s ease",
          overflowY: "auto",
          scrollbarWidth: "thin", 
    
        },
      }}
    >
      <Menu>
        <MenuItem
          icon={<MenuRoundedIcon style={{ cursor: "pointer" }} onClick={() => setCollapsed(!collapsed)} />}
          style={{ backgroundColor: "inherit", display: "flex", justifyContent: "center", alignItems: "center", padding: "20px 14px" }}
        >
          {!collapsed && <h2 style={{ fontSize: "1.5rem", textAlign: "center", color: "#0d47a1" }}>GDG Management</h2>}
        </MenuItem>

        {["/create-gdg", "/list-generations", "/view-metadata", "/archive-generations", "/add-transaction-logs", "/graphical-representation"].map((path, index) => {
          const labels = ["Create GDG Base", "List Generations", "View Metadata", "Archive Generations", "Add Transaction Logs", "Graphical Representation"];
          const icons = [<AddIcon />, <ListIcon />, <MetadataIcon />, <ArchiveIcon />, <AddIcon />, <GraphIcon />];

          return (
            <MenuItem key={path} icon={icons[index]} component={<Link to={path} />} style={menuItemStyles(path)}>
              {!collapsed && labels[index]}
            </MenuItem>
          );
        })}

        <SubMenu label={!collapsed ? "GDG Maintenance" : ""} icon={<EditIcon />} style={{ backgroundColor: "transparent", color: "#0d47a1" }}>
          {["/modify-attributes", "/delete-generation", "/rename-gdg"].map((path, index) => {
            const labels = ["Modify Attributes", "Delete Generation or Base", "Rename GDG Base"];
            const icons = [<EditIcon />, <DeleteIcon />, <RenameIcon />];

            return (
              <MenuItem key={path} icon={icons[index]} component={<Link to={path} />} style={menuItemStyles(path)}>
                {!collapsed && labels[index]}
              </MenuItem>
            );
          })}
        </SubMenu>
      </Menu>
    </Sidebar>
  );
};

export default SidebarComponent;
