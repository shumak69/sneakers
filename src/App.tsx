import "./App.scss";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { useEffect } from "react";
import { fetchSneakers } from "./app/slices/card";
function App() {
  const dispatch = useAppDispatch();
  const { isCartOpen, items, status } = useAppSelector((state) => state.card);
  useEffect(() => {
    dispatch(fetchSneakers());
  }, []);
  return (
    <div className="wrapper">
      {isCartOpen && <Drawer />}
      <Header />
      <div className="divider"></div>
      <div className="content">
        <div className="search">
          <h1>Все кроссовки</h1>
          <div className="searchBlock">
            <label htmlFor="search">
              <img src={"/img/search.svg"} alt="search" />
            </label>
            <input type="text" placeholder="Поиск..." id="search" />
          </div>
        </div>
        <div className="cardWrapper">
          {items.map((card) => (
            <Card
              key={card.id}
              {...card}
              onAddCard={() => console.log("fdsf")}
              onFavorite={() => console.log("favorite")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
