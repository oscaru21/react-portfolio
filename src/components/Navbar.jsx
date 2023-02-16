import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  MenuItem,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import {ReactComponent as Logo} from "../assets/images/svg/result.svg";

//fill="#0023ff"
const navItems = ['Home', 'About', 'Contact', 'Services'];
const drawerWidth = 240

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileMenuAnchor, setMobileMenuAnchor] = React.useState(null);

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  return (
    <div>
      <AppBar position="fixed" sx={{backgroundColor: 'var(--dark-background-color)', color: 'black'}} >
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
          <Button
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, padding: 0, fill:"var(--text-primary)"}}
          >
            <Logo  alt="logo" style={{width: "120px", fontWeight: "bold"}}/>
          </Button>
          {isMobile ? (
            <>
              <IconButton
                aria-label="menu"
                edge="end"
                onClick={handleMobileMenuOpen}
                sx={{mr: 2}}
              >
                <MenuIcon sx={{fill:"var(--text-primary)"}}/>
              </IconButton>
              <Drawer
                anchor="right"
                open={mobileMenuAnchor}
                onClose={handleMobileMenuClose}
                sx={{width: drawerWidth}}
              >
                <List>
                  <ListItem button onClick={() => alert("Home clicked")}>
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem button onClick={() => alert("About clicked")}>
                    <ListItemText primary="About" />
                  </ListItem>
                  <ListItem button onClick={() => alert("Contact clicked")}>
                    <ListItemText primary="Contact" />
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} href="#GithubSection" sx={{ color: 'var(--text-primary)' }}>
                {item}
              </Button>
            ))}
          </Box>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
