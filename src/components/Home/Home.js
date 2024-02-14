import React from "react";
import { StyledButton } from "../styles/Button.styled";
import {
  Name,
  StyledButtonsContainer,
  StyledHome,
  Title,
  Line,
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
import { GoMarkGithub } from "react-icons/go";
import { FaEnvelope } from "react-icons/fa";

import videoBg from "../../assets/videoBg.mp4";

const Home = () => {
  let today = new Date(),
    hour = today.getHours();

  return (
    <div className="main">
      <div className="overlay"></div>
      <video autoPlay muted loop src={videoBg} className="video-bg" />
      <div className="content">
        <IconContext.Provider value={{ size: "1rem" }}>
          <StyledHome id="home">
            {/* Content */}

            <Name>Sumeru Das</Name>
            <Title>Full Stack Developer</Title>
            <p>
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
            </p>
            <StyledButtonsContainer>
              <StyledButton
                icon={projectIcon}
                to="projects"
                smooth={true}
                duration={0}
                delay={0}
                spy={true}
                spyThrottle={0}
                exact="true"
                offset={-50}
              >
                <span>Projects</span>
              </StyledButton>
              <StyledButton
                icon={aboutIcon}
                secondary="true"
                content="B"
                to="about"
                smooth={true}
                duration={0}
                delay={0}
                spy={true}
                spyThrottle={0}
                exact="true"
                offset={-50}
              >
                <span>About me</span>
              </StyledButton>
            </StyledButtonsContainer>
            <Line />
            <Greeting>
              have a great
              <span>
                {hour < 12 ? " morning" : hour < 18 ? " afternoon" : " evening"}
              </span>
              .
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
                <GoMarkGithub />
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
