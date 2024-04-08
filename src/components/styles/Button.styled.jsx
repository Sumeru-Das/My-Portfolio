import styled from "styled-components";
import { Link as Button } from "react-scroll";

export const StyledButton = styled(Button)`
  box-shadow: none !important;
  border-radius: 0.1875rem;
  font-weight: 700;
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 0.9375em;
  text-transform: uppercase;
  color: #f95738;
  padding: 0 2.5rem;
  outline: none !important;
  overflow: hidden;
  display: inline-block;
  position: relative;
  letter-spacing: 0.03125rem;
  border: 0;
  cursor: pointer;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.85em;
    padding: 0 2.1875rem;
  }

  & span {
    position: relative;
    display: block;
    transition: all 0.3s;
  }

  &:hover span {
    -webkit-transform: translateX(-0.625rem);
    transform: translateX(-0.625rem);
  }
`;
