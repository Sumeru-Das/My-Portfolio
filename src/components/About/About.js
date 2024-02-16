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
        <AboutDetailsContainer>
          <StyledParagraph>
            I'm your go-to Full Stack Developer, ready to bring your dream
            product to life in the virtual world. From crafting sleek websites
            for small and medium-sized businesses to empowering you by building
            your dream tech product, I've got the skills and expertise to make
            it happen.
          </StyledParagraph>
          <StyledParagraph>
            With a mastery of JavaScript, React.js, Node.js, express.js, CSS and
            Next.js, I can help ensure your online presence stands out from the
            crowd. I am skilled in creating user-friendly interfaces, building
            RESTful APIs, and seamlessly integrating external services.
            <br />
            <br />
            Your dream + my expertise = scalable, performant, reliable, and
            intuitive products. Let's build something extraordinary!
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
