import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import About from "./components/about/About";
import Projects from "./components/projects/projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkMode, setDarkMode] = React.useState(prefersDarkMode);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
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

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (event) => {
      setDarkMode(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
