import Item from "./Item";
import { styled } from "styled-components";

const BookMarkContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 2rem 0;
`;

const BookMarkList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px 30px;
  margin: 0 70px;

  h1 {
    grid-column: 1 / -1;
  }
`;

const Bookmarks = () => {
  const bookmarkData = JSON.parse(localStorage.getItem("bookmarked"));

  return (
    <BookMarkContainer>
      <BookMarkList>
        <h1>북마크 리스트</h1>
        {bookmarkData.slice(0, 4).map((data) => (
          <Item key={data.id} item={data} />
        ))}
      </BookMarkList>
    </BookMarkContainer>
  );
};

export default Bookmarks;
