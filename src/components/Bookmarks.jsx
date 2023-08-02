import { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item";
import { styled } from "styled-components";
import { AiFillStar } from "react-icons/ai";

const BookMarkList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 70px;
`;

const Bookmarks = () => {
  const [bookMarked, setBookMarked] = useState([]);
  // const [bookMarkedIds, setBookMarkedIds] = useState([]);

  useEffect(() => {
    //   // 이전에 저장된 데이터 로드
    //     const storedData = localStorage.getItem('bookMarkedIds');
    //     if (storedData) {
    //         setBookMarkedIds(JSON.parse(storedData));
    //     }
    // 데이터 가져오기
    // axios
    //   .get("http://cozshopping.codestates-seb.link/api/v1/products")
    //   .then((res) => setBookMarked(res.data))
    //   .catch((err) => console.error(err));
  }, []);

  return (
    <BookMarkList>
      {bookMarked.slice(0, 4).map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </BookMarkList>
  );
};

export default Bookmarks;
