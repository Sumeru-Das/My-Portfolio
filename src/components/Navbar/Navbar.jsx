import React, { useState } from "react";
import {
  Line,
  Menu,
  NavList,
  NavMenuList,
  StyledCTA,
  StyledNavbar,
  StyledNavLinks,
} from "../styles/Navbar.styled";
// import logo from "../../assets/logo.png";
// import { animateScroll as scroll } from "react-scroll";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [stickyNav, setStickyNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledNavbar className={stickyNav ? "sticky" : ""}>
      <NavMenuList>
        <NavList>
          <StyledNavLinks>Home</StyledNavLinks>
        </NavList>
        <NavList>
          <StyledNavLinks>Projects</StyledNavLinks>
        </NavList>
        <NavList>
          <StyledNavLinks>About</StyledNavLinks>
        </NavList>
      </NavMenuList>
      <StyledCTA
        href="mailto:sumerudas2019@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#000"
            >
              <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
            </svg>
            get in touch
          </span>
        </span>
      </StyledCTA>

      <Menu onClick={toggle}>
        <Line width="1.5rem" />
        <Line />
        <Line width="1.5rem" ml="0.5rem" />
      </Menu>

      <MobileMenu isOpen={isOpen} toggle={toggle}></MobileMenu>
    </StyledNavbar>
  );
};

export default Navbar;
