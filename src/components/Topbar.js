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
        background: "linear-gradient(145deg, #e3f2fd, #bbdefb)", 
        padding: "12px 20px", // ✅ Slightly reduced padding
        borderRadius: "16px",
        boxShadow: "4px 8px 20px rgba(0,0,0,0.2)", 
        margin: "15px",
        marginLeft: collapsed ? "40px" : "100px", 
        marginRight: "15px",
        height: "40px", // ✅ Reduced height
        transition: "margin-left 0.3s ease, width 0.3s ease",
      }}
    >
      {/* Left Section - User Profile */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Avatar src="/profile.jpg" alt="User" sx={{ width: 35, height: 35 }} /> {/* ✅ Smaller Avatar */}
        <Box>
          <Typography variant="caption" color="gray">Welcome back!</Typography> {/* ✅ Smaller text */}
          <Typography variant="body2" sx={{ fontWeight: "bold", color: "#0d47a1" }}>John Doe</Typography> {/* ✅ Reduced font size */}
        </Box>
      </Box>

      {/* Right Section - Icons */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <IconButton sx={{ 
          color: "#0d47a1", 
          background: "white", 
          borderRadius: "50%",  // ✅ Circular buttons
          width: 32, height: 32, // ✅ Reduced size
          display: "flex", justifyContent: "center", alignItems: "center",
          boxShadow: "2px 4px 8px rgba(0,0,0,0.15)"
        }}>
          <NotificationsIcon sx={{ fontSize: 18 }} /> {/* ✅ Smaller icon */}
        </IconButton>
        <IconButton sx={{ 
          color: "#0d47a1", 
          background: "white", 
          borderRadius: "50%", // ✅ Circular buttons
          width: 32, height: 32, // ✅ Reduced size
          display: "flex", justifyContent: "center", alignItems: "center",
          boxShadow: "2px 4px 8px rgba(0,0,0,0.15)"
        }}>
          <SettingsIcon sx={{ fontSize: 18 }} /> {/* ✅ Smaller icon */}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
