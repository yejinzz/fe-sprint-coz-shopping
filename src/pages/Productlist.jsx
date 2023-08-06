import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useFetchData from "../hooks/useFetchData";
import Item from "../components/Item";
import Filter from "../components/Filter";
import { styled } from "styled-components";

const ProductContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  margin: 2rem 0;
`;

const LoadingSpinner = styled.div`
  width: 30px;
  height: 30px;
  margin: 40px;
  border: 3px solid rgb(63, 46, 206);
  border-top: 3px solid rgb(240, 240, 240);
  border-radius: 50%;
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function Productlist() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 8;
  const initialLoadCount = 16; // 최초에 로드할 아이템 개수

  useFetchData("http://cozshopping.codestates-seb.link/api/v1/products");
  const productData = useSelector((state) => state.product);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredItems(productData.slice(0, initialLoadCount));
    } else {
      const filteredData = productData.filter(
        (item) => item.type === activeCategory
      );
      setFilteredItems(filteredData.slice(0, initialLoadCount));
    }
  }, [activeCategory, productData]);

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const distanceToBottom = scrollHeight - (scrollTop + clientHeight);

    // 페이지 하단에 도달하면 새로운 아이템을 로드
    if (distanceToBottom < 100 && !isLoading) {
      setIsLoading(true);
    }
  };

  // 무한 스크롤로 새로운 아이템 추가
  useEffect(() => {
    if (isLoading) {
      // 표시할 아이템 개수 계산
      const startIndex = filteredItems.length;
      const endIndex = startIndex + itemsPerPage;

      // setTimeout을 사용하여 새로운 아이템을 로드하는 것을 시뮬레이션
      setTimeout(() => {
        setIsLoading(false);

        // 새로운 아이템 데이터를 슬라이스하여 기존 아이템 데이터에 추가
        if (activeCategory === "All") {
          setFilteredItems(productData.slice(0, endIndex));
        } else {
          const filteredData = productData.filter(
            (item) => item.type === activeCategory
          );
          setFilteredItems(filteredData.slice(0, endIndex));
        }
      }, 1500); // 임의의 지연 시간을 설정하여 로딩 시각적인 효과를 주는 것으로 대체
    }
  }, [isLoading, filteredItems, activeCategory, productData, itemsPerPage]);

  // 스크롤 이벤트 리스너 등록
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 unmount될 때 스크롤 이벤트 리스너 해제
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ProductContainer>
      <Filter setActiveCategory={setActiveCategory} />
      <ProductWrapper>
        {filteredItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ProductWrapper>
      {isLoading ? <LoadingSpinner /> : ""}
    </ProductContainer>
  );
}

export default Productlist;
