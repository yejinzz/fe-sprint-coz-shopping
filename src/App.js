import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from "./pages/Main";
import Productlist from "./pages/Productlist";
import Bookmark from "./pages/Bookmark";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return(
    <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/products/list" element={<Productlist/>}/>
                <Route path="/bookmark" element={<Bookmark/>}/>
            </Routes>
        <Footer />
    </BrowserRouter>
);
}

export default App;
