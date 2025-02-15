import React, { useState } from "react";
import { Box } from "@mui/material";
import SidebarComponent from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Box sx={{ display: "flex", background: "#F5F5F5" , minHeight: "100vh" }}>
      <SidebarComponent collapsed={collapsed} setCollapsed={setCollapsed} />
      
      
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", width: "100%" }}>
      <Topbar collapsed={collapsed} />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            pl: 1,
            pr:3,
            backgroundColor: "transparent",
            minHeight: "100vh",
            marginLeft: collapsed ? "30px" : "90px", 
            marginRight: "15px", 
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
