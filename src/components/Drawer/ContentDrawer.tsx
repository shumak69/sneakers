import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "./Drawer.module.scss";
import { useState } from "react";
import { resetItems, setOrder } from "../../app/slices/cart";
import CartItem from "../CartItem";
import Info from "../Info";
import { openCart } from "../../app/slices/card";
function ContentDrawer() {
  const dispatch = useAppDispatch();
  const [orderId, setOrderId] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { items, isOrderComplete, price } = useAppSelector(
    (state) => state.cart
  );
  function closeDrawer() {
    setError("");
    dispatch(openCart(false));
    dispatch(setOrder(false));
  }
  async function sentOrder() {
    setError("");
    setIsLoading(true);
    try {
      const res = await axios.get(
        "https://6335d63a8aa85b7c5d2408e2.mockapi.io/orders"
      );
      await axios.post("https://6335d63a8aa85b7c5d2408e2.mockapi.io/orders", {
        items,
      });

      dispatch(setOrder(true));
      setOrderId(res.data.length + 1);
      dispatch(resetItems());
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }
  function itemsRender() {
    return (
      <>
        <div className={styles.items}>
          {items.map((item) => (
            <CartItem {...item} key={item.id} />
          ))}
        </div>{" "}
        <div className={styles.cardTotalBlock}>
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>{price} грн</b>
            </li>
          </ul>
          <button className="greenButton" onClick={sentOrder}>
            Оформить заказ
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7H14.7143"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.71436 1L14.7144 7L8.71436 13"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </>
    );
  }
  if (error) {
    return (
      <div className="error errorDrawer">
        <h1>Не удалось оформить заказ :(</h1>
        <div>
          Причина: <span>{error}</span>
        </div>
        <button className="greenButton" onClick={() => setError("")}>
          Попробовать снова
        </button>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className={styles.loaderWrapper}>
        <span className={styles.loader}></span>
        <div>Загрузка заказа...</div>
      </div>
    );
  }
  if (isOrderComplete) {
    return (
      <Info
        title={"Заказ оформлен!"}
        description={`Ваш заказ #${orderId} скоро будет передан курьерской доставке`}
        image={"img/complete-order.jpg"}
        buttonHandler={closeDrawer}
      />
    );
  }
  return (
    <>
      {items.length ? (
        itemsRender()
      ) : (
        <Info
          title={"Корзина пустая"}
          description={
            "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
          }
          image={"img/empty-cart.jpg"}
          buttonHandler={() => dispatch(openCart(false))}
        />
      )}
    </>
  );
}

export default ContentDrawer;
