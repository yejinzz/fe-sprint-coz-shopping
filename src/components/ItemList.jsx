import Item from "./Item";
import { styled } from "styled-components";
import { useSelector } from "react-redux";
import useFetchData from "../hooks/useFetchData";

const ProductListContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
  h1 {
  }
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  margin: 1.5rem 0;
`;

function ItemList() {
  useFetchData("/api/v1/products");
  const productData = useSelector((state) => state.product);
  // console.log(productData);
  return (
    <ProductListContainer>
      <h1>상품 리스트</h1>
      <ProductList>
        {productData.slice(0, 4).map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ProductList>
    </ProductListContainer>
  );
}
export default ItemList;
