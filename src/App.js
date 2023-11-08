import { Routes, useNavigate, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChakraProvider } from "@chakra-ui/react";
import "./assets/css/tailwind.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import DetailProduct from "./pages/DetailProduct";
import MensCloth from "./pages/MensCloth";
import Jewelry from "./pages/Jewelry";
import Electronics from "./pages/Electronics";
import WomensCloth from "./pages/WomensCloth";
import Searched from "./pages/Searched";
import EditStock from "./pages/EditStock";
import Report from "./pages/Report";
import Cart from "./pages/Cart";

function App() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [keywords, setKeywords] = useState("");

  const handleToggleSidebar = () => setIsOpen(!isOpen);

  const handleChange = (value) => {
    setKeywords(value);
  };

  const handleKeydown = (key) => {
    if (key === "Enter") {
      if (!keywords) return;
      navigate({
        pathname: "/searched",
        search: `?keywords=${keywords}`,
      });
      setKeywords("");
    }
  };

  const handleClickCart = () => {
    navigate({ pathname: "/cart" });
  };

  const handleClickBtnLogin = () => {
    navigate({ pathname: "/login" });
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("authToken");
    localStorage.removeItem("cartItems");
    window.location.href = "/";
  };

  const resize = (e) =>
    e.srcElement.innerWidth > 1000 ? setIsOpen(true) : null;

  useEffect(() => {
    if (window.innerWidth > 1000) setIsOpen(true);
    window.addEventListener("resize", resize);
  }, []);

  return (
    <ChakraProvider>
      <div className="w-full min-h-screen flex flex-row">
        {isOpen && <Sidebar isOpen={isOpen} />}
        <div className="w-full md:w-10/12 lg:w-10/12 xl:w-10/12">
          <Header
            handleToggleSidebar={handleToggleSidebar}
            isOpen={isOpen}
            keywords={keywords}
            handleChange={handleChange}
            handleKeydown={handleKeydown}
            handleClickCart={handleClickCart}
            handleClickBtnLogin={handleClickBtnLogin}
            handleLogout={handleLogout}
          />
          <Routes>
            <Route
              path="/"
              name="home"
              useLayout={true}
              exact={true}
              element={<Home />}
            />
            <Route
              path="/login"
              name="login"
              protectedRoute={false}
              element={<Login />}
            />
            <Route
              path="/:id"
              name="detail-product"
              useLayout={true}
              element={<DetailProduct />}
            />
              <Route
              path="/mens-cloth"
              name="mens-cloth"
              useLayout={true}
              element={<MensCloth />}
            />
            <Route
              path="/jewelry"
              name="jewelry"
              useLayout={true}
              element={<Jewelry />}
            />
            <Route
              path="/electronics"
              name="electronics"
              useLayout={true}
              element={<Electronics />}
            />
            <Route
              path="/womens-cloth"
              name="womens-cloth"
              useLayout={true}
              element={<WomensCloth />}
            />
            <Route
              path="/searched"
              name="searched"
              useLayout={true}
              element={<Searched />}
            />
            <Route
              path="/stock"
              name="stock"
              useLayout={true}
              element={<EditStock />}
            />
            <Route
              path="/report"
              name="cart"
              useLayout={true}
              element={<Report />}
            />
            <Route
              path="/cart"
              name="report"
              useLayout={true}
              element={<Cart />}
            />
          </Routes>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
