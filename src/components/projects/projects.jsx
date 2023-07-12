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
import { makeStyles } from "@mui/styles";
import { LaunchRounded, GitHub } from "@mui/icons-material";
import ImageProjectFirst from "../../assets/images/coindom-full.png";

const useStyles = makeStyles((theme) => ({
  stack: {
    backgroundColor: theme.backgroundColor,
    boxShadow: theme.shadows,
    fontWeight: "600!important",
    padding: ".5rem .8rem",
  },
  contentLinks: {
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
  },
  card: {
    display: "flex",
    alignItems: "center",
    padding: "25px!important",
    backgroundColor: `${theme.backgroundColor} !important`,
    boxShadow: theme.shadows,
    borderRadius: "20px!important",
    gap: 50,
  },
  imageBox: {
    borderRadius: 16,
    boxShadow: theme.shadows,
    height: "auto",
    overflow: "hidden",
    width: "35rem",
    height: "300px",
  },
  image: {
    width: "100%",
    transform: "translateY(0%)",
    transition: "transform 5s ease-in-out",
    "&:hover": {
      transform: "translateY(-79%)",
    },
    flexShrink: 0,
  },
  cardContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 25,
    padding: 0,
  },
}));

const ProjectCard = ({
  image,
  title,
  description,
  codeLink,
  demoLink,
  stack,
  reverse,
}) => {
  const classes = useStyles();
  const handleCodeLinkClick = () => {
    window.open(codeLink, "_blank");
  };

  const handleDemoLinkClick = () => {
    window.open(demoLink, "_blank");
  };

  return (
    <Card
      className={classes.card}
      sx={{ flexDirection: reverse ? "row-reverse" : "row" }}
    >
      <Box className={classes.imageBox}>
        <Link>
          <CardMedia className={classes.image} component="img" image={image} />
        </Link>
      </Box>
      <CardContent className={classes.cardContent}>
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
            <Typography key={index} className={classes.stack}>
              {tech}
            </Typography>
          ))}
        </Box>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Link className={classes.contentLinks} onClick={handleCodeLinkClick}>
            Code
            <GitHub />
          </Link>
          <Link className={classes.contentLinks} onClick={handleDemoLinkClick}>
            Live Demo
            <LaunchRounded />
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};

const Projects = () => {
  const projectData = [
    {
      image: ImageProjectFirst,
      title: "CoinDom",
      description:
        "Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time.",
      codeLink: "https://github.com/",
      demoLink: "https://",
      stack: ["React", "SCSS"],
    },
    {
      image: ImageProjectFirst,
      title: "CoinDom",
      description:
        "Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time.",
      codeLink: "https://github.com/",
      demoLink: "https://",
      stack: ["React", "SCSS"],
    },
    {
      image: ImageProjectFirst,
      title: "CoinDom",
      description:
        "Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time.",
      codeLink: "https://github.com/",
      demoLink: "https://",
      stack: ["React", "SCSS"],
    },
    // Add more project data here
  ];

  return (
    <Container>
      <Box sx={{ p: 5 }}>
        <Typography
          variant="h6"
          component="h6"
          color="primary"
          sx={{ fontWeight: 600 }}
        >
          My Projects
        </Typography>
        <Typography
          variant="h4"
          component="h4"
          sx={{ fontWeight: 700, mt: 2, mb: 4 }}
        >
          Each project is a unique piece of development
        </Typography>

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
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Projects;
