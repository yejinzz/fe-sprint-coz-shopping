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
  const initialLoadCount = 16;

  useFetchData("/api/v1/products");
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

  // 무한 스크롤
  useEffect(() => {
    if (isLoading) {
      const startIndex = filteredItems.length;
      const endIndex = startIndex + itemsPerPage;

      setTimeout(() => {
        setIsLoading(false);

        if (activeCategory === "All") {
          setFilteredItems(productData.slice(0, endIndex));
        } else {
          const filteredData = productData.filter(
            (item) => item.type === activeCategory
          );
          setFilteredItems(filteredData.slice(0, endIndex));
        }
      }, 1500);
    }
  }, [isLoading, filteredItems, activeCategory, productData, itemsPerPage]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

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
