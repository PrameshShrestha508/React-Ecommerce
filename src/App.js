import "./App.scss";
import Naav from "./Components/Nav/Naav";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Cart from "./Pages/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import WishList from "./Pages/WishList/WishList";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Naav />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
