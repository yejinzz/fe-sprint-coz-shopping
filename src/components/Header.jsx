import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.5rem;
  background: #fff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  z-index: 1000;
`;

const TitleContainer = styled.div`
  margin-left: 4rem;

  .tilte {
    display: flex;
    align-items: center;
  }
  #name {
    margin-left: 10px;
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
  }
`;

const MenuContainer = styled.div`
  margin-right: 4rem;
  #bar-button {
    font-size: 20px;
    &:hover {
      cursor: pointer;
    }
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledHeader>
      <TitleContainer>
        <Link to="/" className="tilte">
          <img id="logo" src="../codestates_logo.png" alt="codestates logo" />
          <span id="name">COZ Shopping</span>
        </Link>
      </TitleContainer>

      <MenuContainer>
        <div onClick={handleMenuOpen} id="bar-button">
          <FaBars />
        </div>

        <div id="menu">{isOpen ? <Dropdown /> : null}</div>
      </MenuContainer>
    </StyledHeader>
  );
}

export default Header;
