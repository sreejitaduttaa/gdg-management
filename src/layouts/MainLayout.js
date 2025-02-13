import React, { useState } from "react";
import { Box } from "@mui/material";
import SidebarComponent from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Box sx={{ display: "flex", background: "linear-gradient(135deg,rgb(211, 226, 247), #e3f2fd, #d1e8ff)", minHeight: "100vh" }}>
      <SidebarComponent collapsed={collapsed} setCollapsed={setCollapsed} />
      
      
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", width: "100%" }}>
      <Topbar collapsed={collapsed} />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: "transparent",
            minHeight: "100vh",
            marginLeft: collapsed ? "70px" : "240px", 
            // marginTop: "100px", 
            transition: "margin-left 0.3s ease",
          }} 
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
