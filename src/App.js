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
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#2d2e32" : "#f9f9f9",
      },
    },
    typography: {
      fontFamily: "Poppins",
      color: darkMode ? "#f9f9f9" : "#2d2e32",
    },
    shadows: darkMode
      ? ["0 0 10px rgba(0, 0, 0, 0.1)"]
      : ["0 0 10px rgba(0, 0, 0, 0.1)"],
    backgroundColor: darkMode ? "#444" : "#fff",
  });

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
