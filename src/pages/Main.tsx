import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchSneakers, Status } from "../app/slices/card";
import Card from "../components/Card";
import styles from "../components/Card/Card.module.scss";
import MyLoader from "../components/Loader";
function Main() {
  const dispatch = useAppDispatch();
  const { isCartOpen, items, status, error } = useAppSelector(
    (state) => state.card
  );
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    dispatch(fetchSneakers());
  }, []);

  useEffect(() => {
    checkScroll();
  }, [searchValue, items]);

  if (isCartOpen) {
    document.body.style.overflow = "hidden";
    window.scrollTo({ top: 0 });
  } else {
    document.body.style.overflow = "auto";
  }

  function search(e: ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }
  function checkScroll() {
    if (document.body.offsetHeight > window.innerHeight) {
      document.body.style.marginRight = "0";
    } else {
      let div = document.createElement("div");

      div.style.overflowY = "scroll";
      div.style.width = "50px";
      div.style.height = "50px";
      document.body.append(div);
      let scrollWidth = div.offsetWidth - div.clientWidth;

      div.remove();
      document.body.style.marginRight = scrollWidth + "px";
    }
  }
  if (status === Status.ERROR) {
    return (
      <div className="error">
        <h1>Не удалось отобразить товары</h1>
        <div>
          Причина: <span>{error}</span>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="content">
        <div className="search">
          <h1>
            {searchValue
              ? `Поиск по Запросу "${searchValue}"`
              : "Все кроссовки"}
          </h1>
          <div className="searchBlock">
            <label htmlFor="search">
              <img src={"/img/search.svg"} alt="search" />
            </label>
            <input
              type="text"
              placeholder="Поиск..."
              id="search"
              value={searchValue}
              onChange={search}
            />
            {searchValue && (
              <svg
                className="searchClose"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setSearchValue("")}
              >
                <g>
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"></path>
                </g>
              </svg>
            )}
          </div>
        </div>
        <div className="cardWrapper">
          {status === Status.LOADING
            ? [...Array(10)].map((_, i) => (
                <div className={styles.card} style={{ padding: 0 }} key={i}>
                  <MyLoader />
                </div>
              ))
            : items
                .filter((item) =>
                  item.title.toLowerCase().includes(searchValue.toLowerCase())
                )
                .map((card) => <Card key={card.id} {...card} />)}
        </div>
      </div>
    </>
  );
}

export default Main;
