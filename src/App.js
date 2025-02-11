import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ListIcon from "@mui/icons-material/List";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RenameIcon from "@mui/icons-material/DriveFileRenameOutline";
import MetadataIcon from "@mui/icons-material/Info";
import ArchiveIcon from "@mui/icons-material/Archive";
import AddIcon from "@mui/icons-material/Add";
import GraphIcon from "@mui/icons-material/BarChart";

const Home = () => <h1>Welcome to GDG Management Tool</h1>;
const CreateGDG = () => <h1>Create GDG Base</h1>;
const ListGenerations = () => <h1>List Generations</h1>;
const ModifyAttributes = () => <h1>Modify Attributes</h1>;
const DeleteGeneration = () => <h1>Delete Generation or Base</h1>;
const RenameGDG = () => <h1>Rename GDG Base</h1>;
const ViewMetadata = () => <h1>View Metadata</h1>;
const ArchiveGenerations = () => <h1>Archive Generations</h1>;
const AddTransactionLogs = () => <h1>Add Transaction Logs</h1>;
const GraphicalRepresentation = () => <h1>Graphical Representation</h1>;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Box sx={{ display: "flex", backgroundColor: "#f8fbff", minHeight: "100vh" }}>
      <Sidebar
        collapsed={collapsed}
        transitionDuration={300}
        rootStyles={{
          "& .ps-sidebar-container": {
            height: "100vh",
            width: collapsed ? "70px" : "280px",
            background: "linear-gradient(145deg, #e3f2fd, #bbdefb)",
            borderRadius: "16px",
            boxShadow: "4px 8px 20px rgba(0,0,0,0.2)",
            margin: "20px",
            padding: collapsed ? "10px" : "20px",
            transition: "width 0.3s ease, padding 0.3s ease",
          },
        }}
      >
        <Menu>
          {/* Toggle Button Inside Menu */}
          <MenuItem
            icon={<MenuRoundedIcon style={{ cursor: "pointer" }} onClick={() => setCollapsed(!collapsed)} />}
          >
            {!collapsed && <h2>GDG Management</h2>}
          </MenuItem>
          
          <MenuItem icon={<AddIcon />} component={<Link to="/create-gdg" />}>{!collapsed && "Create GDG Base"}</MenuItem>
          <MenuItem icon={<ListIcon />} component={<Link to="/list-generations" />}>{!collapsed && "List Generations"}</MenuItem>
          <SubMenu label={!collapsed ? "GDG Maintenance" : ""} icon={<EditIcon />}>
            <MenuItem icon={<EditIcon />} component={<Link to="/modify-attributes" />}>{!collapsed && "Modify Attributes"}</MenuItem>
            <MenuItem icon={<DeleteIcon />} component={<Link to="/delete-generation" />}>{!collapsed && "Delete Generation or Base"}</MenuItem>
            <MenuItem icon={<RenameIcon />} component={<Link to="/rename-gdg" />}>{!collapsed && "Rename GDG Base"}</MenuItem>
          </SubMenu>
          <MenuItem icon={<MetadataIcon />} component={<Link to="/view-metadata" />}>{!collapsed && "View Metadata"}</MenuItem>
          <MenuItem icon={<ArchiveIcon />} component={<Link to="/archive-generations" />}>{!collapsed && "Archive Generations"}</MenuItem>
          <MenuItem icon={<AddIcon />} component={<Link to="/add-transaction-logs" />}>{!collapsed && "Add Transaction Logs"}</MenuItem>
          <MenuItem icon={<GraphIcon />} component={<Link to="/graphical-representation" />}>{!collapsed && "Graphical Representation"}</MenuItem>
        </Menu>
      </Sidebar>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "#f8fbff",
          minHeight: "100vh",
          marginLeft: collapsed ? "100px" : "240px",
          transition: "margin-left 0.3s ease",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-gdg" element={<CreateGDG />} />
          <Route path="/list-generations" element={<ListGenerations />} />
          <Route path="/modify-attributes" element={<ModifyAttributes />} />
          <Route path="/delete-generation" element={<DeleteGeneration />} />
          <Route path="/rename-gdg" element={<RenameGDG />} />
          <Route path="/view-metadata" element={<ViewMetadata />} />
          <Route path="/archive-generations" element={<ArchiveGenerations />} />
          <Route path="/add-transaction-logs" element={<AddTransactionLogs />} />
          <Route path="/graphical-representation" element={<GraphicalRepresentation />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
