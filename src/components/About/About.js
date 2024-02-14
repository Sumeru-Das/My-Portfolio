import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
// import myImage from "../../assets/my-image.jpg";
import downloadIcon from "../../assets/icons/download-icon.svg";
import resume from "../../assets/Resume.pdf";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="02">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          {/* <AboutImage src={myImage} /> */}
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
            My name is Sumeru Das, completed Bachelor of Information Technology
            from IIIT Bhubaneswar. I am a passionate Full Stack Developer
            developer based in india.
          </StyledParagraph>
          <StyledParagraph>
            I love to design and create responsive websites or web apps from
            scratch. The technologies, tools and languages I am using to build
            my projects are HTML, CSS, JavaScript, Jquery, REACT JS, Redux,
            Redux Toolkit, TailwindCSS, Bootstrap, Node js, Mongo DB,Git and
            GitHub and VS Code.
          </StyledParagraph>
          <Resume>
            <ResumeLink
              href={resume}
              icon={downloadIcon}
              download="Sumeru-Das-Resume"
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
