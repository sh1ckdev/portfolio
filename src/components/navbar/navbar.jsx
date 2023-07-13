import React, { useState } from "react";
import {
  AppBar as MuiAppBar,
  Toolbar as MuiToolbar,
  Typography,
  Button,
  Box,
  Container,
  Switch,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  position: "fixed",
  left: 0,
  right: 0,
  maxWidth: '100vw',
  color: "inherit",
  backgroundColor: theme.palette.mode === "dark" ? "#131316" : "#fff",
  boxShadow: theme.shadows,
}));

const Toolbar = styled(MuiToolbar) ({
  padding: 0
})

const MenuIconButton = styled(IconButton)({
  marginRight: "0",
  padding: 0
});

const ButtonBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const ButtonLink = styled(Button)({
  color: "inherit",
  fontWeight: 600,
});

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor:
          theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor:
      theme.palette.mode === "dark" ? "#003892" : "#fff921",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#000"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <AppBar component="header">
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h4" sx={{ fontFamily: "Rock Salt" }}>
            shick .dev
          </Typography>
          {isMobile ? (
            <>
              <MenuIconButton
                color="inherit"
                aria-label="Open menu"
                edge="end"
                onClick={handleMenuToggle}
              >
                <MenuIcon />
              </MenuIconButton>
              <Drawer anchor="right" open={isMenuOpen} onClose={handleMenuClose}>
                <List>
                  <ListItem button component="a" href="#Hero" onClick={handleMenuClose}>
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem button component="a" href="#About" onClick={handleMenuClose}>
                    <ListItemText primary="About" />
                  </ListItem>
                  <ListItem button component="a" href="#Projects" onClick={handleMenuClose}>
                    <ListItemText primary="Projects" />
                  </ListItem>
                  <ListItem button component="a" href="#Contact" onClick={handleMenuClose}>
                    <ListItemText primary="Contact me" />
                  </ListItem>
                  <MaterialUISwitch
                  color="primary"
                  checked={darkMode}
                  onChange={toggleDarkMode}
                />
                </List>
              </Drawer>
            </>
          ) : (
            <ButtonBox>
              <Box sx={{ fontWeight: 700 }}>
                <ButtonLink href="#Hero">Home</ButtonLink>
                <ButtonLink href="#About">About</ButtonLink>
                <ButtonLink href="#Projects">Projects</ButtonLink>
                <ButtonLink href="#Contact">Contact me</ButtonLink>
                <MaterialUISwitch
                  color="primary"
                  checked={darkMode}
                  onChange={toggleDarkMode}
                />
              </Box>
            </ButtonBox>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
