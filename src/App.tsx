import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { useAppSelector } from "./app/hooks";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Favorite from "./pages/Favorite";
import Main from "./pages/Main";
import Orders from "./pages/Orders";
function App() {
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
