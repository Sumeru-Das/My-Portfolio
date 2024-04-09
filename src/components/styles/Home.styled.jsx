import styled from "styled-components";

export const StyledHome = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 0 8rem;
  height: 100vh;
  overflow: hidden;
  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: center;
    padding: 0;
  }
`;

export const Name = styled.h2`
  font-size: 20vw;
  font-family: name;
  position: relative;
  color: #f4f4f9;
  // line-height: 5.9rem @media all and
  //   (max-width: ${({ theme }) => theme.breakpoints.sm}) {
  //   font-size: 5.1875rem;
  // }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 13.25rem;
  }
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 8.3875rem;
    padding-bottom: 2rem;

  }
  
  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 8.1875rem;
    padding-bottom: 2rem;
`;

// export const Title = styled.h1`
//   font-size: 3.375rem;
//   font-weight: 700;
//   margin: 0.5rem 0 1rem 0;
//   color: #f95738;

//   @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
//     text-align: center;
//     font-size: 2.25rem;
//   }

//   @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     font-size: 2.3875rem;
//   }

//   @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
//     font-size: 4.1875rem;
//   }
// `;

export const StyledButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  margin-top: 3rem;
`;

export const Line = styled.hr`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 5rem;
  position: absolute;
  bottom: 6rem;
  border: none;
  height: 0.125rem;
  border-radius: 2.8125rem;
`;

export const Greeting = styled.p`
  color: #ffffff;
  position: absolute;
  bottom: 3rem;
  font-size: 1.2rem;
  font-weight: 900;


  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: center;
    font-size: 1.25rem;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.3875rem;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 5vw;
`;

export const Responsive = styled.span`
  color: #f4f4f9;
  font-size: 3rem;

@media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
  text-align: center;
  font-size: 2.25rem;
}

@media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
  font-size: 2.3875rem;
}

@media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
  font-size: 1.8rem;
`;

export const Socials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  position: absolute;
  right: 5rem;
  bottom: 3rem;
  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const Social = styled.a`
  cursor: pointer;
  transition: 0.3s ease;
  position: relative;
  color: #f95738;

  &:hover {
    transform: translateY(-0.5 125rem);
    color: #ffffff;
  }

  &::after {
    content: "";
    position: absolute;
    transform: translate(-50%, -50%);
    left: -1rem;
    top: 50%;
    height: 0.5rem;
    width: 0.5rem;
    background: #f95738;
    border-radius: 2.8125rem;
    opacity: 0;
    transition: all 0.3s;
  }

  &:hover::after {
    opacity: 1;
  }
`;

// export const Quote = styled.span`
//   position: absolute;
//   right: 25%;
//   bottom: 30%;
//   color: #a1cca5;
//   font-size: 0.625rem;
//   letter-spacing: 0.125rem;

//   @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
//     display: none;
//   }
// `;
