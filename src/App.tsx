import "./App.scss";
import search from "./assets/img/search.svg";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="divider"></div>
      <div className="content">
        <div className="search">
          <h1>Все кроссовки</h1>
          <div className="searchBlock">
            <label htmlFor="search">
              <img src={search} alt="search" />
            </label>
            <input type="text" placeholder="Поиск..." id="search" />
          </div>
        </div>
        <Card />
      </div>
    </div>
  );
}

export default App;
