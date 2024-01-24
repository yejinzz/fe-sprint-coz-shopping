import React from "react";
import styled from "styled-components";
import { IoCloseSharp } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux/es/hooks/useSelector";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 998;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalWrapper = styled.div`
  position: relative;
  z-index: 999;
  .product-img {
    width: 30rem;
    height: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.604);
  }
  .close-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 2rem;
    fill: #ffffff;
  }
`;

const ModalLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  z-index: 100;
`;

const TitleContainer = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  .title {
    margin: 0 5px;
    color: #ffffff;
    text-shadow: 1px 1px 1px #000000ac;
  }
`;

const Modal = ({ item, closeModal }) => {
  const bookmarkData = useSelector((state) => state.bookmark.isBookmarked);

  return (
    <ModalContainer>
      <ModalWrapper>
        <img
          className="product-img"
          src={item.brand_image_url || item.image_url}
          alt="img"
        />
        <IoCloseSharp className="close-icon" onClick={closeModal} />
        <TitleContainer>
          <AiFillStar
            className="bookmark-btn"
            size={25}
            fill={bookmarkData ? "#ffc635" : "#DFDFDF"}
          />
          <h3 className="title">
            {item.type === "Category"
              ? `# ${item.title}`
              : item.title || item.brand_name}
          </h3>
        </TitleContainer>
      </ModalWrapper>
      <ModalLayer onClick={closeModal} />
    </ModalContainer>
  );
};

export default Modal;
