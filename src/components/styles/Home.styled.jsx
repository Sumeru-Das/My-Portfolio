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
  font-size: 8.1875rem;
  position: relative;
  color: #fff9f9;
  line-height: 5.9rem @media all and
    (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2.1875rem;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 4.875rem;
  }
`;

export const Title = styled.h1`
  font-size: 3.375rem;
  font-weight: 700;
  margin: 0.5rem 0 1rem 0;
  color: #f7f7f7;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: center;
    font-size: 2.25rem;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2.3875rem;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 2.1875rem;
  }
`;

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
  color: ${({ theme }) => theme.color.light};
  position: absolute;
  bottom: 3rem;
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
  color: ${({ theme }) => theme.color.erin};

  &:hover {
    transform: translateY(-0.5 125rem);
    color: ${({ theme }) => theme.backgroundColor.light};
  }

  &::after {
    content: "";
    position: absolute;
    transform: translate(-50%, -50%);
    left: -1rem;
    top: 50%;
    height: 0.5rem;
    width: 0.5rem;
    background: ${({ theme }) => theme.backgroundColor.orange};
    border-radius: 2.8125rem;
    opacity: 0;
    transition: all 0.3s;
  }

  &:hover::after {
    opacity: 1;
  }
`;

export const Quote = styled.span`
  position: absolute;
  right: 25%;
  bottom: 30%;
  color: #94929d;
  font-size: 0.625rem;
  letter-spacing: 0.125rem;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;
