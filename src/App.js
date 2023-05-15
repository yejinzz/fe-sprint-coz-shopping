import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from "./pages/Main";
import Productlist from "./pages/Productlist";
import Bookmark from "./pages/Bookmark";


function App() {
  return(
    <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/products/list" element={<Productlist/>}/>
                <Route path="/bookmark" element={<Bookmark/>}/>
            </Routes>
    </BrowserRouter>
);
}

export default App;
