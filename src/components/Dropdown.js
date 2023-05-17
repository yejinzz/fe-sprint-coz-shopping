import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavManu = styled.ul`
    box-sizing: border-box; 
    list-style-type: none; // ul을 커스텀할 거라면 꼭 해줘야하는 list-style-type:none
    position: absolute; 
    top: 3.5rem; 
    right: 3.5rem;

    border-radius: 8px; 
    background-color: rgba(255, 255, 255, 0.13);
    backdrop-filter: blur( 10px );
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 15px rgba(8, 7, 10, 0.2);
    width: 9rem;
    text-align:center;

    div{
        margin:10px 0px;
    }
    li {
        border-bottom: 1px solid #d1d1d1;
        font-size:13px;
        &:hover {
        background: #d2d2d2;
        border-radius: 4px;
        }

        &:last-child {
        border-bottom: none;
        }
    }

    .dropdown-list {
        display: inline-block;
        margin: 10px 10px;
        border-radius: s
    }
`

function Dropdown() {

    return (
        <NavManu>
            <div>OO님, 어서오세요!</div>
            <li>
                <Link to={"/products/list"} className="dropdown-list">
                    상품리스트 페이지
                </Link>
            </li>
            <li>
                <Link to={"/bookmark"} className="dropdown-list">
                    북마크 페이지
                </Link>
            </li>
    </NavManu>

    )
};

export default Dropdown;