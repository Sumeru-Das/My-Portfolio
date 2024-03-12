import React, { useEffect, useRef } from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  Resume,
  ResumeLink,
  StyledAbout,
  StyledAboutParagraph,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import downloadIcon from "../../assets/icons/download-icon.svg";
import resume from "../../assets/SumeruDas-CV.pdf";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector("#first-paragraph"),
      {
        x: 0,
      },
      {
        x: 500,
        scrollTrigger: {
          trigger: element,
          start: "top top+=100",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      element.querySelector("#second-paragraph"),
      {
        x: 0,
      },
      {
        x: -500,
        scrollTrigger: {
          trigger: element,
          start: "top top+=100",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <StyledAbout id="about" ref={ref}>
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="02">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutDetailsContainer>
          <StyledAboutParagraph id="first-paragraph">
            I'm your go-to Frontend Developer.
          </StyledAboutParagraph>
          <br />
          <StyledAboutParagraph id="second-paragraph">
            Let's build something extraordinary!
          </StyledAboutParagraph>
          <Resume>
            <ResumeLink
              href={resume}
              icon={downloadIcon}
              download="SumeruDas-CV"
            >
              Download Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
