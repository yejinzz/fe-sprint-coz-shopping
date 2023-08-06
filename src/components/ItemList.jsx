import Item from "./Item";
import { styled } from "styled-components";
import { useSelector } from "react-redux";
import useFetchData from "../hooks/useFetchData";

const ProductListContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px 30px;
  margin: 0 70px;

  h1 {
    grid-column: 1 / -1;
  }
`;

function ItemList() {
  useFetchData("http://cozshopping.codestates-seb.link/api/v1/products");
  const productData = useSelector((state) => state.product);
  return (
    <ProductListContainer>
      <ProductList>
        <h1>상품 리스트</h1>
        {productData.slice(0, 4).map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ProductList>
    </ProductListContainer>
  );
}
export default ItemList;
