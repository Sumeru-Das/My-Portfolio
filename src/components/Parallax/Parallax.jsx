import React from "react";
import { Parallax } from "react-parallax";
import parralaxImage from "../../assets/quote-background.jpg";
import { ParallaxContainer, ParallaxText } from "../styles/Parallax.styled";
import RandomQuote from "../Home/RandomQuote";

const ParallaxComponent = () => {
  return (
    <Parallax bgImage={parralaxImage} strength={-200} style={{ width: "100%" }}>
      <ParallaxContainer>
        <ParallaxText>
          <RandomQuote />
        </ParallaxText>
      </ParallaxContainer>
    </Parallax>
  );
};

export default ParallaxComponent;
