import React from "react";
import { Typography, Box, Container } from "@mui/material";
import { styled } from "@mui/system";
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
  return (
      <BoxWrapper id="About">
        <Container>
          <ContainerBox>
            <Image component="img"/>
            <Box sx={{ maxWidth: "31rem" }}>
              <AboutHeading variant="h6">
                About me
              </AboutHeading>
              <AboutTitle variant="h5">
                A dedicated Front-end Developer based in Taganrog, Russia
                <BookmarkIcon color="error" />
              </AboutTitle>
              <Desc variant="body1">
                As a Front-End developer, I have some arsenal of skills in HTML,
                CSS, JavaScript, React and Mui. I excel at developing and
                maintaining responsive websites that provide a smooth user
                experience. My experience is in creating dynamic, attractive
                interfaces by writing clean and optimized code and using
                advanced development tools and techniques. I am also a team
                player who excels at collaborating with cross-functional teams
                to create outstanding web applications.
              </Desc>
            </Box>
          </ContainerBox>
        </Container>
      </BoxWrapper>
  );
};

export default About;
