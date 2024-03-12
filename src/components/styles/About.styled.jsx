import styled from "styled-components";

export const StyledAbout = styled.section`
  background-color: ${({ theme }) => theme.backgroundColor.dark};
  color: ${({ theme }) => theme.color.light};
  height: 100vh;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 80vh;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  gap: 5%;
  justify-content: center;
  text-align: center;
  margin-top: 10%;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    margin-top: 40%;
  }
`;

export const AboutDetailsContainer = styled.div`
  position: relative;
  width: 100%;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
  }
`;

export const StyledAboutParagraph = styled.p`
  color: ${({ theme }) => theme.color.light};
  margin-bottom: 1rem;
  font-size: 3.5rem;
  letter-spacing: ${(props) => props.spacing};
  text-align: ${(props) => props.textAlign};

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${(props) => props.fontSizeMobile || "1.2375rem"};
  }
`;

export const Resume = styled.div`
  display: inline-block;
  margin-top: 10rem;
  position: relative;
  transition: 0.3s ease;

  &::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    bottom: -0.5rem;
    height: 1px;
    border-radius: 5px;
    background: ${({ theme }) => theme.backgroundColor.light};
    width: 100%;
    transition: transform 0.3s ease;
    transform: scaleX(0);
    transform-origin: bottom right;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: 3rem;
  }
`;

export const ResumeLink = styled.a`
  color: #fff;
  letter-spacing: 2px;
  font-weight: 600;
  cursor: pointer;

  &::before {
    content: ${(props) => `url(${props.icon})`};
    position: absolute;
    right: -2rem;
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-transform: translateX(-20px);
    transform: translateX(-20px);
    transition: all 0.3s;
  }

  &:hover::before {
    opacity: 1;
    filter: alpha(opacity=100);
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1rem;
  }
`;
