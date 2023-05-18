import { useState, useEffect } from 'react';
import axios from 'axios';
import Item from '../components/Item'; 
import Filter from '../components/Filter'; 
import { styled } from 'styled-components';

const ProductContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const FilterWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ProductWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 70px;
`;

function Productlist() {
  const [itemData, setItemData] = useState([]);
  const [activeCat, setActiveCat] = useState("All");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    axios.get('http://cozshopping.codestates-seb.link/api/v1/products')
      .then(res => setItemData(res.data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
   if (activeCat === "All") {
      setFilteredItems(itemData);
    } else {
      const filteredData = itemData.filter(item => item.type === activeCat);
      setFilteredItems(filteredData);
    }
  }, [activeCat, itemData]);



  const imagUrls = [
    '../all.png',
    '../product.png',
    '../category.png',
    '../Exhibition.png',
    '../brand.png'
  ];

  return (
    <ProductContainer>
      <FilterWrapper>
        <Filter
          type="All"
          name="전체"
          handleSetCat={setActiveCat}
          src={imagUrls[0]}
        />
        <Filter
          type="Product"
          name="상품"
          handleSetCat={setActiveCat}
          src={imagUrls[1]}
        />
        <Filter
          type="Category"
          name="카테고리"
          handleSetCat={setActiveCat}
          src={imagUrls[2]}
        />

        <Filter
          type="Exhibition"
          name="기획전"
          handleSetCat={setActiveCat}
          src={imagUrls[3]}
        />
        <Filter
          type="Brand"
          name="브랜드"
          handleSetCat={setActiveCat}
          src={imagUrls[4]}
        />
      </FilterWrapper>
      <ProductWrapper>
        {filteredItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ProductWrapper>
    </ProductContainer>
  );
}

export default Productlist;
