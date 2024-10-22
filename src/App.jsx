import "./App.css";
import { Routes, Route } from "react-router-dom";

import { ProductProvider } from "./Contexts/ProductContext";

import { Header } from "./Components/header";
import { ProductList } from "./Pages/productList";
import { ProductDetail } from "./Pages/ProductDetail";
import { Cart } from "./Pages/cartPage";
import { WishList } from "./Pages/WishList";

function App() {
  return (
    <ProductProvider>
      <div>
        <Header />
        <Routes>
          <Route path="/product" element={<ProductList />} />
          <Route path="/product/:productID" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
        </Routes>
      </div>
    </ProductProvider>
  );
}

export default App;
