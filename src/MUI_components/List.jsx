import { Box, Button, List, Tooltip } from "@mui/material";
import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  Home,
  Work,
  People,
  BusinessCenter,
  LibraryBooks,
  Settings,
  DarkMode,
  LightMode,
} from "@mui/icons-material";

const MyList = ({ setmyMOde, theme }) => {
  const myList = [
    { title: "Home", icon: <Home /> },
    { title: "My Projects", icon: <Work /> },
    { title: "Networking", icon: <People /> },
    { title: "Job Board", icon: <BusinessCenter /> },
    { title: "Resources", icon: <LibraryBooks /> },
    { title: "Settings", icon: <Settings /> },
  ];

  return (
    <Box sx={{ flexGrow: "1.1", display: { xs: "none", md: "block" } }}>
      <List sx={{ position: "fixed" }}>
        {myList.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}

        {/* Change Mode Button */}
        <Tooltip title="Toggle Dark/Light Mode" arrow>
          <Button
            onClick={() => {
              const newMode = theme.palette.mode === "dark" ? "light" : "dark";
              localStorage.setItem("currentMode", newMode);
              setmyMOde(newMode);
            }}
            variant="contained"
            color="primary"
            sx={{
              mt: 2,
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px 16px",
              boxShadow: 3,
              "&:hover": {
                boxShadow: 6,
              },
            }}
            startIcon={theme.palette.mode === "dark" ? <LightMode /> : <DarkMode />}
          >
            Change Mode
          </Button>
        </Tooltip>
      </List>
    </Box>
  );
};

export default MyList;
