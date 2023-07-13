import React from "react";
import { styled } from '@mui/system';
import { Container, Box, Typography } from "@mui/material";
import { Telegram, GitHub } from "@mui/icons-material";

const BoxWrapper = styled(Box) (({ theme }) => ({
  backgroundColor:
  theme.palette.mode === "dark" ? "#131316" : "#2d2e32",
  padding: "24px",
}))

const ContainerBox = styled(Box) ({
  padding: "40px", 
  display: "flex", 
  justifyContent: "space-between" 
})

const GitHubIcon = styled(GitHub) ({
  fontSize: 40,
  cursor: "pointer",
  marginRight: "0.5rem",
  color: "#fff",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.3)",
  },
})

const TelegramIcon = styled(Telegram) ({
  fontSize: 40,
  cursor: "pointer",
  marginRight: "0.5rem",
  color: "#fff",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.3)",
  },
})

const Contact = () => {
  const currentYear = new Date().getUTCFullYear();
  return (
      <BoxWrapper component="footer">
        <Container>
          <ContainerBox>
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
              <GitHubIcon
                onClick={() => {
                  window.open("https://github.com/", "_blank");
                }}
              />
              <TelegramIcon
                onClick={() => {
                  window.open("https://t.me/", "_blank");
                }}
              />
            </Box>
          </ContainerBox>
        </Container>
      </BoxWrapper>
  );
};

export default Contact;
