import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
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
          <StyledParagraph>
            Frontend Developer specializing in TypeScript, React.js, Tailwind
            CSS, Next.js. Crafting sleek, intuitive, scalable web solutions for
            businesses.
          </StyledParagraph>
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
