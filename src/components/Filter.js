import React from 'react';
import { styled } from 'styled-components';

const FilterContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin:20px;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 20px;
    img{
        margin-bottom:10px;
    }
    &:hover{
            cursor: pointer;
        }
`;



function Filter ({ type, handleSetCat, src, name}) {
    return (
      <FilterContainer>
        <ButtonContainer
            onClick={() => handleSetCat(type)}
        >
            <img src= {src} alt="filter-img"/>
            {name}
        </ButtonContainer>
      </FilterContainer>
    );
}

export default Filter;

