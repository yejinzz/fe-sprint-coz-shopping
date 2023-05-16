import React from 'react';
import styled from 'styled-components';


const FooterContainer = styled.footer`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 5rem;
    border-top: 1px solid #d2d2d2;

    div{
        color: #787878;
        font-size:13px;
    }
`;

function Footer () {
    return (
        <FooterContainer>
            <div>개인정보 처리방침 | 이용 약관</div>
            <div>All rights reserved @ Codestates</div>
        </FooterContainer>

    )
}

export default Footer;
