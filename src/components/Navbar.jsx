import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Box,
  Button,
  List,
  ListItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { ReactComponent as Logo } from "../assets/images/svg/result.svg";

const navItems = ["Home", "About", "Github", "Contact"];
const drawerWidth = 240;

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
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "var(--dark-background-color)" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            edge="start"
            aria-label="menu"
            href="#HomeSection"
            sx={{ mr: 2, padding: 0, fill: "var(--text-primary)" }}
          >
            <Logo alt="logo" style={{ width: "120px", fontWeight: "bold" }} />
          </Button>
          {isMobile ? (
            <>
              <IconButton
                aria-label="menu"
                edge="end"
                onClick={handleMobileMenuOpen}
                sx={{ mr: 2 }}
              >
                <MenuIcon sx={{ fill: "var(--text-primary)" }} />
              </IconButton>
              <Drawer
                anchor="right"
                open={mobileMenuAnchor}
                onClose={handleMobileMenuClose}
                sx={{ width: drawerWidth }}
              >
                <List>
                  {navItems.map((item) => (
                    <ListItem button key={item} onClick={handleMobileMenuClose}>
                      <Button href={`#${item}Section`}>{item}</Button>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  href={`#${item}Section`}
                  sx={{ color: "var(--text-primary)" }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
