import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { useAppSelector } from "./app/hooks";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Favorite from "./pages/Favorite";
import Main from "./pages/Main";
function App() {
  const { isCartOpen } = useAppSelector((state) => state.card);
  return (
    <div className="wrapper">
      <Header />
      {isCartOpen && <Drawer />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;
