import React from "react";
import { styled } from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 20px;
  img {
    margin-bottom: 10px;
  }
  &:hover {
    cursor: pointer;
  }
`;
const FilterWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Filter = ({ setActiveCategory }) => {
  const imagUrls = [
    "../all.png",
    "../product.png",
    "../category.png",
    "../Exhibition.png",
    "../brand.png",
  ];

  return (
    <FilterWrapper>
      <FilterBtn
        type="All"
        label="전체"
        setActiveCategory={setActiveCategory}
        src={imagUrls[0]}
      />
      <FilterBtn
        type="Product"
        label="상품"
        setActiveCategory={setActiveCategory}
        src={imagUrls[1]}
      />
      <FilterBtn
        type="Category"
        label="카테고리"
        setActiveCategory={setActiveCategory}
        src={imagUrls[2]}
      />

      <FilterBtn
        type="Exhibition"
        label="기획전"
        setActiveCategory={setActiveCategory}
        src={imagUrls[3]}
      />
      <FilterBtn
        type="Brand"
        label="브랜드"
        setActiveCategory={setActiveCategory}
        src={imagUrls[4]}
      />
    </FilterWrapper>
  );
};

export default Filter;

function FilterBtn({ type, setActiveCategory, src, label }) {
  return (
    <FilterContainer>
      <ButtonContainer onClick={() => setActiveCategory(type)}>
        <img src={src} alt="filter-img" />
        {label}
      </ButtonContainer>
    </FilterContainer>
  );
}
