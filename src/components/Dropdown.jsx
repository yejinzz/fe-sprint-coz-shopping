import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PiGiftThin } from "react-icons/pi";
import { PiStarThin } from "react-icons/pi";

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
  position: absolute;
  top: 3rem;
  right: 0;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 15px rgba(8, 7, 10, 0.2);
  padding: 15px;
  font-size: 0.9rem;

  div {
    font-weight: bold;
    color: rgb(12, 26, 94);
    margin-bottom: 0.7rem;
  }
`;

const DropdownList = styled.ul`
  list-style-type: none;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background: rgb(232, 232, 232);
    }
  }
  hr {
    border: none;
    height: 0.1px;
    margin: 0.3rem 0;
    background-color: gray;
  }
`;

function Dropdown() {
  return (
    <DropdownContainer>
      <div>예진님, 어서오세요!</div>
      <DropdownList>
        <Link to={"/products/list"}>
          <li>
            <PiGiftThin style={{ marginRight: "5px" }} />
            상품리스트 페이지
          </li>
        </Link>

        <hr />

        <Link to={"/bookmark"}>
          <li>
            <PiStarThin style={{ marginRight: "5px" }} />
            북마크 페이지
          </li>
        </Link>
      </DropdownList>
    </DropdownContainer>
  );
}

export default Dropdown;
