import React from "react";
import { Typography, Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Image from "../../assets/images/about-img.62b47e7f183d4b4e9feb.webp";

const About = () => {
  const theme = useTheme();
  return (
    <>
      <Box id="About" sx={{ backgroundColor: theme.backgroundColor, p: 5 }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 5,
            }}
          >
            <Box
              component="img"
              sx={{
                backgroundImage: `url(${Image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "31rem",
                height: "25rem",
                borderRadius: "1.7rem",
              }}
            />
            <Box sx={{ width: 500 }}>
              <Typography
                variant="h6"
                component="h6"
                color="primary"
                sx={{ fontWeight: 600 }}
              >
                About me
              </Typography>
              <Typography
                variant="h5"
                component="h5"
                sx={{ my: 2, fontWeight: 600 }}
              >
                A dedicated Front-end Developer based in Taganrog, Russia
                <BookmarkIcon color="error" />
              </Typography>
              <Typography
                variant="p"
                component="p"
                sx={{ color: "text.secondary" }}
              >
                As a Front-End developer, I have some arsenal of skills in HTML,
                CSS, JavaScript, React and Mui. I excel at developing and
                maintaining responsive websites that provide a smooth user
                experience. My experience is in creating dynamic, attractive
                interfaces by writing clean and optimized code and using
                advanced development tools and techniques. I am also a team
                player who excels at collaborating with cross-functional teams
                to create outstanding web applications.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default About;
