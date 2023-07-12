import React from "react";
import {
  Typography,
  Box,
  Container,
  List,
  ListItemIcon,
  Divider,
} from "@mui/material";
import { WavingHandTwoTone, Telegram, GitHub } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import avatarImage from "../../assets/images/avatar.jpg";

const useStyles = makeStyles((theme) => ({
  stackIcon: {
    backgroundColor: theme.backgroundColor,
    boxShadow: theme.shadows,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "4rem",
    width: "4rem",
    margin: "1rem",
  },
  avatarAnimation: {
    animation: "$morph 8s ease-in-out infinite",
    backgroundImage: `url(${avatarImage})`,
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
    height: "25rem",
    position: "relative",
    transition: "all 1s ease-in-out",
    width: "25rem",
  },
  "@keyframes morph": {
    "0%": {
      borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
    },
    "50%": {
      borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%",
    },
    "100%": {
      borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
    },
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Box
        id="Hero"
        sx={{
          display: "flex",
          mt: 15,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            mt: 5,
            maxWidth: 500,
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 600,
              fontSize: "4rem",
              color: (theme) => theme.palette.text.primary,
            }}
          >
            FrontEnd React Developer{" "}
            <WavingHandTwoTone
              sx={{
                color: (theme) => theme.palette.primary.main,
                fontSize: "3.2rem",
              }}
            />
          </Typography>
          <Typography
            sx={{
              color: (theme) => theme.palette.text.secondary,
              fontSize: "1.3rem",
              my: 3,
            }}
          >
            Hi, I'm Alexey Cherman. A passionate Frontend Developer based in
            Taganrog, Russia.
          </Typography>
          <Box>
            <GitHub
              sx={{
                fontSize: 40,
                cursor: "pointer",
                marginRight: "0.5rem",
                color: (theme) => theme.palette.text.primary,
                transition: "color 0.3s",
                "&:hover": {
                  color: (theme) => theme.palette.primary.main,
                },
              }}
              onClick={() => {
                window.open("https://github.com/", "_blank");
              }}
            />
            <Telegram
              sx={{
                fontSize: 40,
                cursor: "pointer",
                color: (theme) => theme.palette.text.primary,
                transition: "color 0.3s",
                "&:hover": {
                  color: (theme) => theme.palette.primary.main,
                },
              }}
              onClick={() => {
                window.open("https://t.me/", "_blank");
              }}
            />
          </Box>
        </Box>
        <Box className={classes.avatarAnimation}></Box>
      </Box>
      <List
        sx={{
          display: "flex",
          my: 3,
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: (theme) => theme.palette.text.primary,
            fontSize: "1.3rem",
            fontWeight: 600,
            mr: 3,
          }}
        >
          My stack
        </Typography>
        <Divider orientation="vertical" flexItem />
        <ListItemIcon className={classes.stackIcon}>
          <img
            src={require("../../assets/images/html.svg").default}
            alt="HTML"
            height="30"
          />
        </ListItemIcon>
        <ListItemIcon className={classes.stackIcon}>
          <img
            src={require("../../assets/images/css.svg").default}
            alt="CSS"
            height="30"
          />
        </ListItemIcon>
        <ListItemIcon className={classes.stackIcon}>
          <img
            src={require("../../assets/images/javascript.svg").default}
            alt="JavaScript"
            height="30"
          />
        </ListItemIcon>
        <ListItemIcon className={classes.stackIcon}>
          <img
            src={require("../../assets/images/react.svg").default}
            alt="React"
            height="30"
          />
        </ListItemIcon>
        <ListItemIcon className={classes.stackIcon}>
          <img
            src={require("../../assets/images/mui.svg").default}
            alt="Material-UI"
            height="30"
          />
        </ListItemIcon>
        <ListItemIcon className={classes.stackIcon}>
          <img
            src={require("../../assets/images/figma.svg").default}
            alt="Figma"
            height="30"
          />
        </ListItemIcon>
      </List>
    </Container>
  );
};

export default Hero;
