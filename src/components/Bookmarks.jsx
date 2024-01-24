import Item from "./Item";
import { styled } from "styled-components";

const BookMarkContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
  > p {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 14rem;
  }
  > h1 {
  }
`;

const BookMarkList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  margin: 1.5rem 0;
`;

const Bookmarks = () => {
  const bookmarkData = JSON.parse(localStorage.getItem("bookmarked"));
  return (
    <BookMarkContainer>
      <h1>북마크 리스트</h1>

      {bookmarkData.length !== 0 ? (
        <BookMarkList>
          {bookmarkData.slice(0, 4).map((data) => (
            <Item key={data.id} item={data} />
          ))}
        </BookMarkList>
      ) : (
        <p>북마크 내역이 없습니다.</p>
      )}
    </BookMarkContainer>
  );
};

export default Bookmarks;
