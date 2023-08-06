import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { bookmarkActions } from "../store/bookmarkSlice";

const ItemContainer = styled.div`
  margin-bottom: 20px;
`;
const ImgContainer = styled.div`
  position: relative;

  .item-img {
    width: 18rem;
    height: 14rem;
    border-radius: 10px;
  }

  .bookmark-btn {
    position: absolute;
    bottom: 1rem;
    right: 0.5rem;
  }
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

const Item = ({ item }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const bookmarkData = useSelector((state) => state.bookmark.isBookmarked);
  const dispatch = useDispatch();

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setIsOpenModal(false);
  };

  const toggleBookmark = () => {
    if (!isBookmarked) {
      dispatch(bookmarkActions.addBookmark(item));
      setIsBookmarked(true);
    } else {
      dispatch(bookmarkActions.removeBookmark(item));
      setIsBookmarked(false);
    }
  };

  useEffect(() => {
    const bookmarkData = JSON.parse(localStorage.getItem("bookmarked"));
    if (bookmarkData) {
      setIsBookmarked(
        bookmarkData.some((bookmarkItem) => bookmarkItem.id === item.id)
      );
    }
  });

  return (
    <ItemContainer>
      <ImgContainer>
        <img
          className="item-img"
          src={item.image_url || item.brand_image_url}
          alt="product"
          onClick={openModal}
        />
        <AiFillStar
          className="bookmark-btn"
          size={30}
          fill={isBookmarked ? "#ffc635" : "#DFDFDF"}
          onClick={toggleBookmark}
        />
      </ImgContainer>

      {item.type === "Product" && (
        <>
          <TopSection>
            <div className="title">{item.title}</div>
            <div className="discount">{item.discountPercentage}%</div>
          </TopSection>
          <BottomSection>
            <div className="price">{item.price}원</div>
          </BottomSection>
        </>
      )}

      {item.type === "Category" && (
        <>
          <TopSection>
            <div className="title"># {item.title}</div>
          </TopSection>
        </>
      )}

      {item.type === "Brand" && (
        <>
          <TopSection>
            <div className="title">{item.brand_name}</div>
            <div className="follower">관심 고객수</div>
          </TopSection>
          <BottomSection>
            <div className="follwer-number">{item.follower}</div>
          </BottomSection>
        </>
      )}

      {item.type === "Exhibition" && (
        <>
          <TopSection>
            <div className="title">{item.title}</div>
          </TopSection>
          <BottomSection>
            <div className="subtitle">{item.sub_title}</div>
          </BottomSection>
        </>
      )}

      {isOpenModal && <Modal item={item} closeModal={closeModal} />}
    </ItemContainer>
  );
};

export default Item;
