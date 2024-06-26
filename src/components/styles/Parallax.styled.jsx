import styled from "styled-components";

export const ParallaxContainer = styled.div`
min-height: 500px;

  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 100vh;
    width: 90%;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    height: 100vh;
  }
`;

export const ParallaxText = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 3rem;
  font-weight: 800;
  color: white;
  width: 100%;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 2.5rem;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.25rem;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2rem;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 1.75rem;
  }
`;
