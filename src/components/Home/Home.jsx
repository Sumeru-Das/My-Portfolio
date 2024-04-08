import React from "react";
import { StyledButton } from "../styles/Button.styled";
import {
  Name,
  StyledButtonsContainer,
  StyledHome,
  Responsive,
  Greeting,
  Social,
  Socials,
} from "../styles/Home.styled";
import "./style.css";
import projectIcon from "../../assets/icons/project-icon.svg";
import aboutIcon from "../../assets/icons/about-me.svg";
import { IconContext } from "react-icons";
import { GrLinkedinOption } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

import RandomQuote from "./RandomQuote";
import SplitType from "split-type";
// import gsap from "gsap";
// import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="main">
      <div className="content">
        <IconContext.Provider value={{ size: "1.3rem" }}>
          <StyledHome id="home">
            <Name className="font">Sumeru Das</Name>
            <Responsive>
              I <span className="change-text"></span>{" "}
              <span className="responsive">r</span>
              <span className="responsive">e</span>
              <span className="responsive">s</span>
              <span className="responsive">p</span>
              <span className="responsive">o</span>
              <span className="responsive">n</span>
              <span className="responsive">s</span>
              <span className="responsive">i</span>
              <span className="responsive">v</span>
              <span className="responsive">e</span> websites.
            </Responsive>

            {/* <Line /> */}
            <Greeting>
              <RandomQuote />
            </Greeting>
            <Socials>
              <Social
                href="https://www.instagram.com/s_u_m_e_r_u__das/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram />
              </Social>
              <Social
                href="mailto:sumerudas2019@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope />
              </Social>
              <Social
                href="https://github.com/Sumeru-Das"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </Social>
              <Social
                href="https://www.linkedin.com/in/sumerudas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrLinkedinOption />
              </Social>
            </Socials>
          </StyledHome>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Home;
