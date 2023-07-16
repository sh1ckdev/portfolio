import React from "react";
import { Container, Box, Typography, List, Link } from "@mui/material";
import { MapTwoTone, Telegram } from "@mui/icons-material";
import { useTranslation } from 'react-i18next';
import { styled } from "@mui/system";

const BoxWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.backgroundColor,
  padding: "40px",  
}))

const BlockWrapper = styled(Box) (({theme}) =>({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    flexDirection: 'column',
    textAlign: 'center'
  }
}));

const ContactTitle = styled(Typography) (({theme}) =>({
  fontWeight: 600,
  margin: "16px 0 32px 0",
  [theme.breakpoints.down("sm")]:{
    fontSize: 20
  }
}))

const ListWrapper = styled(List) (({theme}) => ({
  display: 'flex',
  gap: 10,
  [theme.breakpoints.down("md")]: {
    flexDirection: 'column'
  }
}))

const IconWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  boxShadow: theme.shadows,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "5rem",
  width: "5rem",
  margin: "1rem",
}));

const ContentWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

const CustomLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  fontWeight: "500",
  color:  theme.palette.text.secondary,
  transition: "color 0.3s",
  "&&:hover": {
    color: theme.palette.primary.main,
  },
}));


const Contact = () => {
  const { t } = useTranslation();
  return (
    <BoxWrapper id="Contact">
      <Container>
        <Box sx={{ p: 5 }}>
          <Typography variant="h6" component="h6" color="primary" fontWeight={600}>
          {t('contact.contactheading')}
          </Typography>
          <ContactTitle variant="h4">
          {t('contact.contacttitle')}
          </ContactTitle>
          <ListWrapper>
            <BlockWrapper>
              <IconWrapper>
                <MapTwoTone sx={{ fontSize: 40 }} color="primary" />
              </IconWrapper>
              <ContentWrapper>
                <Typography variant="h6" fontWeight={600}>
                {t('contact.location.title')}
                </Typography>
                <Typography variant="body1" fontWeight={500} color="text.secondary">
                  {t('contact.location.geo')}
                </Typography>
              </ContentWrapper>
            </BlockWrapper>
            <BlockWrapper>
              <IconWrapper>
                <Telegram sx={{ fontSize: 40 }} color="primary" />
              </IconWrapper>
              <ContentWrapper>
                <Typography variant="h6" fontWeight={600}>
                  Telegram
                </Typography>
                <CustomLink
                  href="https://t.me/"
                  target="_blank"
                >
                  @sh1ckdev
                </CustomLink>
              </ContentWrapper>
            </BlockWrapper>
          </ListWrapper>
        </Box>
      </Container>
    </BoxWrapper>
  );
};

export default Contact;
