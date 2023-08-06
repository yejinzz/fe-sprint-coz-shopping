import React, { useState } from "react";
import Item from "../components/Item";
import { styled } from "styled-components";

const BookmarkContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BookmarWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  margin: 2rem 0;
`;

function Bookmarklist() {
  const bookmarkData = JSON.parse(localStorage.getItem("bookmarked"));
  return (
    <BookmarkContainer>
      <BookmarWrapper>
        {bookmarkData.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </BookmarWrapper>
    </BookmarkContainer>
  );
}

export default Bookmarklist;
