import Bookmarks from "../components/Bookmarks";
import ItemList from "../components/ItemList";
import { styled } from "styled-components";

const MainContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`;

function Main() {
  return (
    <MainContainer>
      <ItemList />
      <Bookmarks />
    </MainContainer>
  );
}
export default Main;
