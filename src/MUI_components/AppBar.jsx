import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Box,
  InputBase,
  MenuItem,
  Menu
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import WorkIcon from "@mui/icons-material/Work";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: { marginLeft: theme.spacing(3), width: "auto" },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: { width: "20ch" },
  },
}));

const AppBarr = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);
  const isMobile = useMediaQuery("(max-width:600px)");
  console.log(isMobile)

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2, display: { xs: "flex", md: "none" } }}>
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" noWrap sx={{ display: { xs: "none", sm: "block" } }}>
          CollabHub
        </Typography>

        <Search sx={{ flexGrow: 1 }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search projects, skills..." inputProps={{ "aria-label": "search" }} />
        </Search>

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton size="large" color="inherit">
            <Badge badgeContent={3} color="error">
              <WorkIcon />
            </Badge>
          </IconButton>

          <IconButton size="large" color="inherit">
            <Badge badgeContent={5} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <IconButton size="large" edge="end" color="inherit" onClick={handleMenuOpen}>
            <AccountCircle />
          </IconButton>
        </Box>

        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton size="large" color="inherit" onClick={handleMobileMenuOpen}>
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Menu>

      <Menu anchorEl={mobileMenuAnchorEl} open={Boolean(mobileMenuAnchorEl)} onClose={handleMobileMenuClose}>
        <MenuItem onClick={handleMobileMenuClose}>
          <IconButton size="large" color="inherit">
            <Badge badgeContent={3} color="error">
              <WorkIcon />
            </Badge>
          </IconButton>
          Jobs
        </MenuItem>
        <MenuItem onClick={handleMobileMenuClose}>
          <IconButton size="large" color="inherit">
            <Badge badgeContent={5} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          Notifications
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <IconButton size="large" color="inherit">
            <AccountCircle />
          </IconButton>
          Profile
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default AppBarr;
