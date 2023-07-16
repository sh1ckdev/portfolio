import React, { createContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { createTheme, useMediaQuery } from "@mui/material";

export const Context = createContext();

export function ContextProvider({ children }) {

  const [language, setLanguage] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true);


 //scroll
  function handleScrollTo(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const yOffset = -64; 
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}


  //darkTheme
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          background: {
            default: darkMode ? "#2d2e32" : "#f9f9f9",
          },
        },
        typography: {
          fontFamily: "Montserrat",
          color: darkMode ? "#f9f9f9" : "#2d2e32",
        },
        shadows: darkMode ? ["0 0 10px rgba(255, 255, 255, 0.1)"] : ["0 0 10px rgba(0, 0, 0, 0.1)"],
        backgroundColor: darkMode ? "#444" : "#fff",
      }),
    [darkMode]
  );


    //language
  const handleChangeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
      i18n.changeLanguage(savedLanguage);
    } else {
      setLanguage("en");
      i18n.changeLanguage("en");
    }
    setLoading(false);
  }, [i18n]);


  //menu
  const handleMenuToggle = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <Context.Provider
      value={{
        language,
        handleChangeLanguage,
        isMenuOpen,
        handleMenuToggle,
        handleMenuClose,
        darkMode,
        toggleDarkMode,
        prefersDarkMode,
        theme,
        loading,
        handleScrollTo
      }}
    >
      {children}
    </Context.Provider>
  );
}
