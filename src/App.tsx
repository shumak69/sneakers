import { Route, Routes, useLocation } from "react-router-dom";
import "./styles/App.scss";
import { useAppSelector } from "./app/hooks";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Favorite from "./pages/Favorite";
import Main from "./pages/Main";
import Orders from "./pages/Orders";
import { useEffect } from "react";
import { checkScroll } from "./utils/checkScroll";
function App() {
  const { isCartOpen } = useAppSelector((state) => state.card);
  if (isCartOpen) {
    document.body.style.overflow = "hidden";
    window.scrollTo({ top: 0 });
  } else {
    document.body.style.overflow = "auto";
  }
  const location = useLocation();
  useEffect(() => {
    checkScroll();
  }, [location]);
  return (
    <div className="wrapper">
      <Header />
      <Drawer />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;
