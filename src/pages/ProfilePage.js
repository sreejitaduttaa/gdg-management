
import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

const ProfilePage = () => {


  return (
    <Box sx={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <Typography variant="h4" sx={{ marginBottom: "20px", fontWeight: "bold" }}>
        Profile
      </Typography>

      {/* User Profile */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Avatar src="/profile.jpg" alt="User" sx={{ width: 100, height: 100 }} />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#0d47a1" }}>
            Sreejita Dutta
          </Typography>
          <Typography variant="body2" color="gray">
            sreejitadutta23@gmail.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
