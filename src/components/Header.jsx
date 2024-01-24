import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  background: #fff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  z-index: 99;
`;
const HeaderWrapper = styled.div`
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
`;

const TitleContainer = styled.div`
  /* margin-left: 4rem; */

  .tilte {
    display: flex;
    align-items: center;
  }
  .name {
    margin-left: 10px;
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
  }
`;

const MenuContainer = styled.div`
  position: relative;
  .bar-button {
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
      <HeaderWrapper>
        <TitleContainer>
          <Link to="/" className="tilte">
            <img
              className="logo"
              src="../codestates_logo.png"
              alt="codestates logo"
            />
            <span className="name">COZ Shopping</span>
          </Link>
        </TitleContainer>

        <MenuContainer>
          <FaBars onClick={handleMenuOpen} className="bar-button" />
          {isOpen ? <Dropdown /> : null}
        </MenuContainer>
      </HeaderWrapper>
    </StyledHeader>
  );
}

export default Header;
