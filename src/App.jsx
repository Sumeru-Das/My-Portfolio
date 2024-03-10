import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import ParallaxComponent from "./components/Parallax/Parallax";
import Navbar from "./components/Navbar/Navbar";
import Preloader from "./components/PreLoader/PreLoader";
import Projects from "./components/Projects/Projects";

import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import { BrowserRouter as Router } from "react-router-dom";
import Technologies from "./components/Technologies/Technologies";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();

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
