import ItemList from '../components/ItemList'; 
import { styled } from 'styled-components';


const MainContainer = styled.div`

    #subtitle{
        font-size: 25px;
        font-weight: bold;
        margin: 20px 70px
    };
`;


function Main () {

    return(
        <MainContainer>
            <div id="subtitle"> 상품 리스트 </div>
            <ItemList />
            <div id="subtitle"> 북마크 리스트 </div>
        </MainContainer>
    )

}
export default Main;