import React from "react";
import {
  Typography,
  Box,
  Container,
  Grid,
  Link,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { styled } from "@mui/system";
import { LaunchRounded, GitHub } from "@mui/icons-material";
import { useTranslation } from 'react-i18next';
import ImageProjectFirst from "../../assets/images/coindom-full.png";
import ImageProjectSecond from "../../assets/images/Carmark.png";
import ImageProjectThird from "../../assets/images/VurtualReality.png";


const BoxWrapper = styled(Box) (({theme}) =>({
  padding: "40px",
  [theme.breakpoints.down("sm")]:{
    padding: "40px 0",
  }
}))

const ContentHeading = styled(Typography) (({theme}) =>({
  color: theme.palette.primary.main,
  fontWeight: 600,
}))

const ContentTitle = styled(Typography) (({theme}) =>({
  fontWeight: 700,
  marginTop: "16px", 
  marginBottom: "32px",
  [theme.breakpoints.down("sm")]:{
    fontSize: 20
  }
}))

const Stack = styled(Typography) (({ theme }) => ({
  backgroundColor: theme.backgroundColor,
  boxShadow: theme.shadows,
  fontWeight: "600!important",
  padding: ".5rem .8rem",
}))

const CardWrapper = styled(Card) (({ theme, isReverse }) => ({
  flexDirection: isReverse ? "row-reverse" : "row",
  display: "flex",
  alignItems: "center",
  padding: "25px!important",
  backgroundColor: `${theme.backgroundColor} !important`,
  boxShadow: theme.shadows,
  borderRadius: "20px!important",
  gap: 50,
  [theme.breakpoints.down("md")]:{
    flexDirection: "column"
  }
}))

const ImageBox = styled(Box) (({ theme })=>({
  borderRadius: 16,
  boxShadow: theme.shadows,
  overflow: "hidden",
  maxWidth: "35rem",
  width: '100%',
  height: "300px",
}))

const Image = styled(CardMedia)(({scroll, scrollY}) => ({
  width: "100%",
  height: "auto",
  flexShrink: 0,
  transform: scroll ? `translateY(${scrollY})` : "translateY(0%)",
  transition: "transform 10s ease-in-out",
}))

const ContentCard = styled(CardContent) ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 25,
  padding: 0,
})

const ContentLinks = styled(Link) (({ theme }) =>({
  textDecoration: "none!important",
  display: "flex",
  alignItems: "center",
  fontWeight: "500 !important",
  fontSize: "18px !important",
  cursor: "pointer",
  gap: "4px",
  color: `${theme.palette.text.primary} !important`,
  transition: "color 0.3s",
  "&:hover": {
    color: `${theme.palette.primary.main} !important`,
  },
}))

const ProjectCard = ({
  image,
  title,
  description,
  codeLink,
  demoLink,
  stack,
  reverse,
  scrollY
}) => {


  const [scroll, setScroll] = React.useState(false);

  const handleCodeLinkClick = () => {
    window.open(codeLink, "_blank");
  };

  const handleDemoLinkClick = () => {
    window.open(demoLink, "_blank");
  };


  return (
    <CardWrapper isReverse={reverse}>
      <ImageBox>
        <Link>
          <Image component="img" 
          image={image}        
          style={{
            transform: scroll ? `translateY(${scrollY})` : "translateY(0%)",
            transition: "transform 5s ease-in-out",
          }}
          scroll={scroll}
          onMouseEnter={() => {
            setScroll(true);
          }}
          onMouseLeave={() => {
            setScroll(false);
          }} />
        </Link>
      </ImageBox>
      <ContentCard>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography
          variant="p"
          sx={{ textAlign: "center", fontWeight: 500, color: "text.secondary" }}
        >
          {description}
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          {stack.map((tech, index) => (
            <Stack key={index} >
              {tech}
            </Stack>
          ))}
        </Box>
        <Box sx={{ display: "flex", gap: 3 }}>
          <ContentLinks  onClick={handleCodeLinkClick}>
            Code
            <GitHub />
          </ContentLinks>
          <ContentLinks onClick={handleDemoLinkClick} sx={{ whiteSpace: "nowrap"}}>
            Live Demo
            <LaunchRounded />
          </ContentLinks>
        </Box>
      </ContentCard>
    </CardWrapper>
  );
};

const Projects = () => {
  const { t } = useTranslation();

  const projectData = [
    {
      image: ImageProjectFirst,
      title: t('projects.projectcard.project1.title'),
      description: t('projects.projectcard.project1.desc'),
      codeLink: "https://github.com/",
      demoLink: "https://",
      stack: ["React", "SCSS"],
      scrollY: "-79%"
    },
    {
      image: ImageProjectSecond,
      title: t('projects.projectcard.project1.title'),
      description: t('projects.projectcard.project1.desc'),
      codeLink: "https://github.com/",
      demoLink: "https://",
      stack: ["React", "SCSS"],
      scrollY: "-93%"
    },
    {
      image: ImageProjectThird,
      title: t('projects.projectcard.project1.title'),
      description: t('projects.projectcard.project1.desc'),
      codeLink: "https://github.com/",
      demoLink: "https://",
      stack: ["React", "SCSS"],
      scrollY: "-83%"
    },
  ];

  return (
    <Container>
      <BoxWrapper id="Projects">
        <ContentHeading variant="h6">
        {t('projects.projectsheading')}
        </ContentHeading>
        <ContentTitle variant="h4">
        {t('projects.projectstitle')}
        </ContentTitle>

        <Grid container spacing={10}>
          {projectData.map((project, index) => (
            <Grid item key={index}>
              <ProjectCard
                image={project.image}
                title={project.title}
                description={project.description}
                codeLink={project.codeLink}
                demoLink={project.demoLink}
                stack={project.stack}
                reverse={index % 2 !== 0}
                scrollY={project.scrollY}
              />
            </Grid>
          ))}
        </Grid>
      </BoxWrapper>
    </Container>
  );
};

export default Projects;
