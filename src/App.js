import React, { useContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import { Context } from "./context";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import About from "./components/about/About";
import Projects from "./components/projects/projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import CircularProgress from "@mui/material/CircularProgress";

const App = () => {
  const {
    theme,
    darkMode,
    toggleDarkMode,
    loading
  } = useContext(Context);


  return (
    <React.Fragment>
      {loading ? (
        <CircularProgress style={{ position: "absolute", top: "50%", left: "50%" }} />
      ) : (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </ThemeProvider>
      )}
    </React.Fragment>
  );
};

export default App;
