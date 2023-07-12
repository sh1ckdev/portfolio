import React from "react";
import { Container, Box, Typography, List, Link } from "@mui/material";
import { MapTwoTone, Telegram } from "@mui/icons-material";
import { styled } from "@mui/system";

const BoxWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.backgroundColor,
  padding: "40px"
}))

const BlockWrapper = styled(Box) ({
  display: "flex",
  alignItems: "center",
});

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
  return (
    <BoxWrapper>
      <Container>
        <Box sx={{ p: 5 }}>
          <Typography variant="h6" component="h6" color="primary" fontWeight={600}>
            Contact
          </Typography>
          <Typography variant="h4" component="h4" fontWeight={700} mt={2} mb={4}>
            Don't be shy! Hit me up!
          </Typography>
          <List sx={{ display: "flex", gap: 10 }}>
            <BlockWrapper>
              <IconWrapper>
                <MapTwoTone sx={{ fontSize: 40 }} color="primary" />
              </IconWrapper>
              <ContentWrapper>
                <Typography variant="h6" fontWeight={600}>
                  Location
                </Typography>
                <Typography variant="body1" fontWeight={500} color="text.secondary">
                  Taganrog, Russia
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
          </List>
        </Box>
      </Container>
    </BoxWrapper>
  );
};

export default Contact;
