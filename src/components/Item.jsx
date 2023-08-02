import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const ItemContainer = styled.div`
  margin-bottom: 20px;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
  font-weight: bold;
  .discount {
    color: #452cdd;
  }
`;

const BottomSection = styled.div`
  text-align: right;
  .subtitle {
    text-align: left;
  }
`;

const Image = styled.img`
  width: 264px;
  height: 210px;
  border-radius: 10px;
`;

const Item = ({ item }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setIsOpenModal(false);
  };

  switch (item.type) {
    case "Product":
      return (
        <ItemContainer onClick={openModal}>
          <Image src={item.image_url} alt="product" />
          <TopSection>
            <div className="title">{item.title}</div>
            <div className="discount">{item.discountPercentage}%</div>
          </TopSection>
          <BottomSection>
            <div className="price">{item.price}원</div>
          </BottomSection>
          {isOpenModal && <Modal item={item} closeModal={closeModal} />}
        </ItemContainer>
      );

    case "Category":
      return (
        <ItemContainer onClick={openModal}>
          <Image src={item.image_url} alt="category" />
          <TopSection>
            <div className="title"># {item.title}</div>
          </TopSection>
          {isOpenModal && <Modal item={item} closeModal={closeModal} />}
        </ItemContainer>
      );
    case "Brand":
      return (
        <ItemContainer onClick={openModal}>
          <Image src={item.brand_image_url} alt="brand" />
          <TopSection>
            <div className="title">{item.brand_name}</div>
            <div className="follower">관심 고객수</div>
          </TopSection>
          <BottomSection>
            <div className="follwer-number">{item.follower}</div>
          </BottomSection>
          {isOpenModal && <Modal item={item} closeModal={closeModal} />}
        </ItemContainer>
      );
    case "Exhibition":
      return (
        <ItemContainer onClick={openModal}>
          <Image src={item.image_url} alt="exhibition" />
          <TopSection>
            <div className="title">{item.title}</div>
          </TopSection>
          <BottomSection>
            <div className="subtitle">{item.sub_title}</div>
          </BottomSection>
          {isOpenModal && <Modal item={item} closeModal={closeModal} />}
        </ItemContainer>
      );
    default:
      return null;
  }
};

export default Item;
