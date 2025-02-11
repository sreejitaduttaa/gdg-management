import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Box } from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RenameIcon from '@mui/icons-material/DriveFileRenameOutline';
import MetadataIcon from '@mui/icons-material/Info';
import ArchiveIcon from '@mui/icons-material/Archive';
import AddIcon from '@mui/icons-material/Add';
import GraphIcon from '@mui/icons-material/BarChart';
<SubMenu label="Logs" icon={<AddIcon />}>
  <MenuItem icon={<ListIcon />}>View Logs</MenuItem>
  <MenuItem icon={<DeleteIcon />}>Delete Logs</MenuItem>
  <MenuItem icon={<RenameIcon />}>Rename Logs</MenuItem>
</SubMenu>
const App = () => {
  return (
    <Box sx={{ display: 'flex', backgroundColor: '#f8fbff', minHeight: '100vh' }}>
      <Sidebar
        rootStyles={{
          "& .ps-sidebar-container": {
            height: "100vh",
            width: "fit-content",
            minWidth: "200px",
            background: "linear-gradient(145deg, #e3f2fd, #bbdefb)",
            borderRadius: "16px",
            boxShadow: "4px 8px 20px rgba(0,0,0,0.2)",
            margin: "20px",
            padding: "20px",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          },
          "&:hover .ps-sidebar-container": {
            transform: "translateY(-5px)",
            boxShadow: "4px 12px 30px rgba(0,0,0,0.3)",
          },
        }}
        menuItemStyles={{
          button: {
            color: "#0d47a1",
            fontWeight: 600,
            fontSize: "16px",
            padding: "10px 20px",
            borderRadius: "8px",
            margin: "5px 10px",
            transition: "background-color 0.3s, color 0.3s",
          },
          icon: {
            color: "#0d47a1",
            marginRight: "12px",
          },
        }}
      >
        <Menu>
          <MenuItem
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              textTransform: "uppercase",
              padding: "10px 20px",
              margin: "5px 10px",
            }}
          >
            GDG 
          </MenuItem>
          <MenuItem icon={<AddIcon />}>Create GDG Base</MenuItem>
          <MenuItem icon={<ListIcon />}>List Generations</MenuItem>
          <SubMenu label="GDG Maintenance" icon={<EditIcon />}>
            <MenuItem icon={<EditIcon />}>Modify Attributes</MenuItem>
            <MenuItem icon={<DeleteIcon />}>Delete Generation or Base</MenuItem>
            <MenuItem icon={<RenameIcon />}>Rename GDG Base</MenuItem>
          </SubMenu>
          <MenuItem icon={<MetadataIcon />}>View Metadata</MenuItem>
          <MenuItem icon={<ArchiveIcon />}>Archive Generations</MenuItem>
          <MenuItem icon={<AddIcon />}>Add Transaction Logs</MenuItem>
          <MenuItem icon={<GraphIcon />}>Graphical Representation</MenuItem>
        </Menu>
      </Sidebar>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "#f8fbff",
          minHeight: "100vh",
          marginLeft: "240px" // Ensure content starts after sidebar
        }}
      >
        <h1 style={{ marginLeft: '20px' }}>Welcome to GDG Management Tool</h1>
      </Box>
    </Box>
  );
};

export default App;
