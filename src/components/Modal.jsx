import React from "react";
import styled from "styled-components";
import { IoCloseSharp } from "react-icons/io5";
import Bookmark from "./Bookmarks";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalImg = styled.div`
  position: relative;
  width: 30rem;
  height: 20rem;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${({ imageURL }) => `url('${imageURL}')`};
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.604);

  .close-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 2rem;
    /* color: white; */
  }

  .title {
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 20px;
    font-weight: bold;
    color: #fff;
  }
`;

const ModalLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 997;
  background-color: rgba(255, 255, 255, 0.126);
  backdrop-filter: blur(4px);
`;

const Modal = ({ item, closeModal }) => {
  return (
    <ModalContainer>
      <ModalImg imageURL={item.image_url}>
        <IoCloseSharp className="close-icon" onClick={closeModal} />
        <Bookmark />
        <p className="title">{item.title}</p>
      </ModalImg>

      <ModalLayer onClick={closeModal} />
    </ModalContainer>
  );
};

export default Modal;
