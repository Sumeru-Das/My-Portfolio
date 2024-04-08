// import About from "./components/About/About";
// import Footer from "./components/Footer/Footer";
// import Home from "./components/Home/Home";
// import ParallaxComponent from "./components/Parallax/Parallax";
// import Navbar from "./components/Navbar/Navbar";
// import Preloader from "./components/PreLoader/PreLoader";
// import Projects from "./components/Projects/Projects";
// import Technologies from "./components/Technologies/Technologies";

import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import { BrowserRouter as Router } from "react-router-dom";
import { lazy, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

const About = lazy(() => import("./components/About/About"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Home = lazy(() => import("./components/Home/Home"));
const ParallaxComponent = lazy(() => import("./components/Parallax/Parallax"));
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Preloader = lazy(() => import("./components/PreLoader/PreLoader"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Technologies = lazy(() =>
  import("./components/Technologies/Technologies")
);

import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);

      document.body.style.cursor = "default";

      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <div>
            <AnimatePresence mode="wait">
              {isLoading && <Preloader />}
            </AnimatePresence>
          </div>
          <GlobalStyles />
          <Navbar />
          <Home />
          <Projects />
          <About />
          <ParallaxComponent />
          <Technologies />
          <Footer />
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
