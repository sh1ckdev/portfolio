import React from "react";
import { styled } from '@mui/system';
import { Container, Box, Typography } from "@mui/material";
import { useTranslation } from 'react-i18next';
import { Telegram, GitHub } from "@mui/icons-material";

const BoxWrapper = styled(Box) (({ theme }) => ({
  backgroundColor:
  theme.palette.mode === "dark" ? "#131316" : "#2d2e32",
  padding: "24px",
}))

const ContainerBox = styled(Box) (({theme}) =>({
  padding: "40px", 
  display: "flex", 
  alignItems: 'center',
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]:{
    flexDirection: "column-reverse", 
    padding: '40px 0'
  }
}))

const GitHubIcon = styled(GitHub) ({
  fontSize: 40,
  cursor: "pointer",
  color: "#fff",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.3)",
  },
})

const TelegramIcon = styled(Telegram) ({
  fontSize: 40,
  cursor: "pointer",
  color: "#fff",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.3)",
  },
})

const Copyright = styled(Typography) (({theme}) =>({
  fontWeight: 600,
  color: "#fff",
  [theme.breakpoints.down("sm")]:{
    fontSize: 14
  }
}))

const BoxIcon = styled(Box) ({
  display: 'flex',
  gap: 10,
  padding: '20px',
})

const Contact = () => {
  const currentYear = new Date().getUTCFullYear();
  const { t } = useTranslation();
  return (
      <BoxWrapper component="footer">
        <Container>
          <ContainerBox>
            <Copyright variant="h6">
              &copy; {currentYear} {t('footer.copyright')}
            </Copyright>
            <BoxIcon>
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
            </BoxIcon>
          </ContainerBox>
        </Container>
      </BoxWrapper>
  );
};

export default Contact;
