import React from "react";
import { ModalCard, ModalLink, Overlay } from "../styles/Modal.styled";
const Modal = ({ toggleHandler }) => {
  return (
    <>
      <OverlayBackground toggleHandler={toggleHandler} />
      <ModalCard>
        Contact Me . Go to <ModalLink>sumerudas2019@gmail.com</ModalLink>
      </ModalCard>
    </>
  );
};

const OverlayBackground = ({ toggleHandler }) => {
  return <Overlay onClick={toggleHandler} />;
};

export default Modal;
