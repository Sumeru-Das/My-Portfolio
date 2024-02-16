import styled from "styled-components";

export const TechnologiesContainer = styled.section`
  background-color: ${({ theme }) => theme.backgroundColor.dark};
  color: ${({ theme }) => theme.color.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TechnologiesHeader = styled.h2`
  text-align: center;
  font-weight: 700;
`;

export const TechnologiesIcons = styled.div`
  display: flex;
  height: 7rem;
  width: 70%;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
  margin-top: 4rem;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

  /* add this code to style the scroll bar */
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: #000;
  }

  &::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 0.25rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #00ff40;
  }
`;

export const TechnologyIcon = styled.img`
  height: 70px;

  &:hover {
    transform: scale(1.2);
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 24px;
  }
`;
