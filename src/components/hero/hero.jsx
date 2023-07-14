import React from "react";
import {
  Typography,
  Box,
  Container,
  List,
  ListItemIcon,
  Divider,
  useMediaQuery
} from "@mui/material";
import { WavingHandTwoTone, Telegram, GitHub } from "@mui/icons-material";
import { styled } from "@mui/system";
import { keyframes } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import avatarImage from "../../assets/images/avatar.jpg";

const BoxWrapper = styled(Box) (({theme}) => ({
  display: "flex",
  marginTop: "120px",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row", 
  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
  },
}))

const StackIcon = styled(ListItemIcon) (({ theme }) =>({
  backgroundColor: theme.backgroundColor,
  boxShadow: theme.shadows,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "4rem",
  width: "4rem",
  margin: "1rem",
}))

const morphAnimation = keyframes`
  0% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
  }
  100% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
`;

const AvatarAnimation = styled(Box) (({theme}) =>({
  animation: `${morphAnimation} 8s ease-in-out infinite`,
  backgroundImage: `url(${avatarImage})`,
  backgroundPosition: "50%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
  height: "25rem",
  position: "relative",
  transition: "all 1s ease-in-out",
  width: "25rem",
  padding: "40px",
  [theme.breakpoints.down("sm")]: {
    width: "20rem",
    height: "20rem",
  }
}));

const WavingHandTwoToneIcon = styled(WavingHandTwoTone) (({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "3.2rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  }
}))

const MainText = styled(Typography) (({ theme }) => ({
  fontWeight: 600,
  fontSize: "4rem",
  color: theme.palette.text.primary,
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem"
  }
}))

const MainDesc = styled(Typography) (({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "1.3rem",
  margin: "24px 0",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  }
}))

const ContentBox = styled(Box) (({ theme }) =>({
  marginTop: "40px",
  maxWidth: 550,
  [theme.breakpoints.down("md")]: {
    textAlign: 'center',
  }
}))

const GitHubIcon = styled(GitHub) (({ theme }) =>({
  fontSize: 40,
  cursor: "pointer",
  color: theme.palette.text.primary,
  transition: "color 0.3s",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}))

const TelegramIcon = styled(Telegram) (({ theme }) =>({
  fontSize: 40,
  cursor: "pointer",
  color: theme.palette.text.primary,
  transition: "color 0.3s",
  "&:hover": {
    color: theme.palette.primary.main,
  }
}))

const IconBox = styled(Box) ({
  display: 'inline-flex',
  gap: 10
})

const ListBox = styled(List) (({theme}) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 10
  },
}))

const StackText = styled(Typography) (({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "1.3rem",
  fontWeight: 600,
  marginRight: '20px',
  [theme.breakpoints.down("md")]:{
    margin: "30px 0 10px 0"
  }
}))

const StackBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '20px',
  flexDirection: "row",
  alignItems: 'center',
  [theme.breakpoints.down("md")]:{
    flexDirection: "column",
  },
}));


const HeroCard = ({src, alt}) => {
  return (
        <StackIcon >
          <img
            src={src}
            alt={alt}
            height="30"
          />
        </StackIcon>
  )
}

const Hero = () => {
  const { t } = useTranslation();
  const HeroData = [
    {
      src:  require("../../assets/images/html.svg").default,
      alt: "HTML"
    },
    {
      src:  require("../../assets/images/css.svg").default,
      alt: "HTML"
    },
    {
      src:  require("../../assets/images/react.svg").default,
      alt: "HTML"
    },
    {
      src:  require("../../assets/images/mui.svg").default,
      alt: "HTML"
    },
    {
      src:  require("../../assets/images/javascript.svg").default,
      alt: "HTML"
    },
    {
      src:  require("../../assets/images/figma.svg").default,
      alt: "HTML"
    }
  ]
  
  
  return (
    <Container maxWidth="lg">
      <BoxWrapper id="Hero">
        <ContentBox>
          <MainText variant="h2" component="h2">
          {t('hero.maintext')}{" "}
            <WavingHandTwoToneIcon/>
          </MainText>
          <MainDesc>
          {t('hero.maindesc')}
          </MainDesc>
          <IconBox>
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
          </IconBox>
        </ContentBox>
        <AvatarAnimation />
      </BoxWrapper>
      <StackBox>
      <StackText>
      {t('hero.steck')}
        </StackText>
        <Divider orientation={useMediaQuery((theme)=>theme.breakpoints.down("md")) ? "horizontal" : "vertical"} flexItem />
      <ListBox>
        {HeroData.map((hero, index)=>(
        <HeroCard key={index}
        src={hero.src}
        alt={hero.alt}
        />
        ))}
      </ListBox>
      </StackBox>
    </Container>
  );
};

export default Hero;
