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
import logo from "../assets/logo.png";

const SidebarComponent = ({ collapsed, setCollapsed }) => {
  const location = useLocation();

  const menuItemStyles = (path) => ({
    backgroundColor: location.pathname === path ? "#FF5001" : "inherit",
    color: location.pathname === path ? "#fff" : "#333",  
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
          background: "white",
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
        style={{ backgroundColor: "inherit", display: "flex", alignItems: "center", padding: "20px 14px" }}
      >
        {!collapsed && (
          <div style={{ display: "flex", alignItems: "center", gap: "1px" }}>
            <img src={logo} alt="Logo" style={{ width: "40px", height: "40px" }} />
            <h2 style={{ fontSize: "1.5rem", color: "#0d47a1" }}>GDG Wizard</h2>
          </div>
        )}
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

        <SubMenu label={!collapsed ? "GDG Maintenance" : ""} icon={<EditIcon style={{ color: "#333" }} />} style={{ backgroundColor: "transparent", color: "#333" }}>
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
