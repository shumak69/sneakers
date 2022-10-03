import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Favorite from "./pages/Favorite";
import Main from "./pages/Main";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;
