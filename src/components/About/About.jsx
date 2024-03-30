import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  Resume,
  ResumeLink,
  StyledAbout,
  StyledAboutParagraph,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import downloadIcon from "../../assets/icons/download-icon.svg";
import resume from "../../assets/SumeruDas-CV.pdf";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="02">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutDetailsContainer>
          <StyledAboutParagraph>
            I'm your go-to Frontend Developer.
          </StyledAboutParagraph>

          <StyledAboutParagraph>
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
