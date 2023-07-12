import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Telegram, GitHub } from "@mui/icons-material";

const Contact = () => {
  const currentYear = new Date().getUTCFullYear();
  const theme = useTheme();
  return (
      <Box
        component="footer"
        sx={{
          backgroundColor:
            theme.palette.mode === "dark" ? "#131316" : "#2d2e32",
          p: 3,
        }}
      >
        <Container>
          <Box sx={{ p: 5, display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "#fff",
              }}
            >
              &copy; {currentYear} sh1ckdev. All rights reserved.
            </Typography>
            <Box>
              <GitHub
                sx={{
                  fontSize: 40,
                  cursor: "pointer",
                  marginRight: "0.5rem",
                  color: "#fff",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.3)",
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
                  color: "#fff",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.3)",
                  },
                }}
                onClick={() => {
                  window.open("https://t.me/", "_blank");
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
  );
};

export default Contact;
