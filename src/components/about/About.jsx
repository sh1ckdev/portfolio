import React from "react";
import { Typography, Box, Container } from "@mui/material";
import { styled } from "@mui/system";
import { useTranslation } from 'react-i18next';
import BookmarkIcon from "@mui/icons-material/Bookmark";
import image from "../../assets/images/about-img.62b47e7f183d4b4e9feb.webp";

const BoxWrapper = styled(Box) (({ theme }) => ({
  backgroundColor: theme.backgroundColor,
  padding: "40px",
  [theme.breakpoints.down("sm")]:{
    padding: "20px",
  }
}))

const ContainerBox = styled(Box) (({theme}) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "40px",
  gap: 20,
  flexDirection: 'row',
  [theme.breakpoints.down("lg")]:{
    flexDirection: 'column',
    textAlign: 'center',
    padding: 0,
  }
}))

const Image = styled(Box) (({theme}) => ({
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  maxWidth: "31rem",
  width: '100%',
  height: "25rem",
  borderRadius: "1.7rem",
  flexShrink: 0,
  [theme.breakpoints.down("md")]:{
    marginBottom: "30px",
    height: "15rem",
  }
}))

const AboutHeading = styled(Typography) (({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 600,
}));

const AboutTitle = styled(Typography) (({theme}) =>({
  margin: "16px 0",
  fontWeight: 600,
  [theme.breakpoints.down("sm")]:{
    fontSize: 20
  }
}))

const Desc = styled(Typography) (({theme}) => ({
  color: theme.palette.text.secondary,
  [theme.breakpoints.down("sm")]:{
    fontSize: 14
  }
}))

const About = () => {
  const { t } = useTranslation();
  return (
      <BoxWrapper id="About">
        <Container>
          <ContainerBox>
            <Image component="img"/>
            <Box sx={{ maxWidth: "31rem" }}>
              <AboutHeading variant="h6">
              {t('about.aboutheading')}
              </AboutHeading>
              <AboutTitle variant="h5">
              {t('about.abouttitle')}
                <BookmarkIcon color="error" />
              </AboutTitle>
              <Desc variant="body1">
              {t('about.aboutdesc')}
              </Desc>
            </Box>
          </ContainerBox>
        </Container>
      </BoxWrapper>
  );
};

export default About;
