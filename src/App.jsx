import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Productlist from "./pages/Productlist";
import Bookmarklist from "./pages/Bookmarklist";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products/list" element={<Productlist />} />
        <Route path="/bookmark" element={<Bookmarklist />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
