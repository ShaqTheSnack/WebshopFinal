import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/main_layout/MainLayout";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import SingleProduct from "./components/pages/SingleProduct";
import "./index.css";

function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}> 
              <Route index element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="products/:id" element={<SingleProduct />} />
            </Route>
          </Routes>
        </BrowserRouter>
    );
}

export default App;

