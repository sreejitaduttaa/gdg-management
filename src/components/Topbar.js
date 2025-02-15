import React from "react";
import { Box, Avatar, Typography, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";

const Topbar = ({ collapsed }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "white", 
        padding: "12px 20px", 
        borderRadius: "16px",
        boxShadow: "4px 8px 20px rgba(0,0,0,0.2)", 
        marginTop: "20px",
        marginLeft: collapsed ? "40px" : "100px", 
        marginRight: "15px",
        height: "45px", 
        transition: "margin-left 0.3s ease, width 0.3s ease",
      }}
    >
      {/* Left Section - User Profile */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Avatar src="/profile.jpg" alt="User" sx={{ width: 35, height: 35 }} />
        <Box>
          <Typography variant="caption" color="gray">Welcome back!</Typography> 
          <Typography variant="body1" sx={{ fontWeight: "bold", color: "#0d47a1" }}>Sreejita Dutta</Typography> 
        </Box>
      </Box>

      {/* Right Section - Icons */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <IconButton sx={{ 
          color: "#0d47a1", 
          background: "white", 
          borderRadius: "50%",  
          width: 32, height: 32, 
          display: "flex", justifyContent: "center", alignItems: "center",
          boxShadow: "2px 4px 8px rgba(0,0,0,0.15)"
        }}>
          <NotificationsIcon sx={{ fontSize: 18 }} />
        </IconButton>
        <IconButton sx={{ 
          color: "#0d47a1", 
          background: "white", 
          borderRadius: "50%",
          width: 32, height: 32, 
          display: "flex", justifyContent: "center", alignItems: "center",
          boxShadow: "2px 4px 8px rgba(0,0,0,0.15)"
        }}>
          <SettingsIcon sx={{ fontSize: 18 }} /> 
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
