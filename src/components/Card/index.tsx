import { useState, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ICard } from "../../app/slices/card";
import { addToCart, deleteFromCart } from "../../app/slices/cart";
import { addToFavorite, deleteFromFavorite } from "../../app/slices/favorite";
import styles from "./Card.module.scss";

function Card({ imageUrl, price, title, id }: ICard) {
  const { items: favoriteItems } = useAppSelector((state) => state.favorite);
  const { items: cartItem } = useAppSelector((state) => state.cart);
  const [isAdded, setIsAdded] = useState(
    !!cartItem.find((item) => item.id === id)
  );
  const [isFavorite, setFavorite] = useState(false);
  const dispatch = useAppDispatch();
  const isMount = useRef(true);
  function onAddCard() {
    setIsAdded((state) => !state);
    if (!isAdded) {
      dispatch(addToCart({ imageUrl, price, title, id }));
    } else {
      dispatch(deleteFromCart(id));
    }
  }
  useEffect(() => {
    setIsAdded(!!cartItem.find((item) => item.id === id));
    if (isMount.current) {
      isMount.current = false;
    } else {
      localStorage.setItem("cart", JSON.stringify(cartItem));
      localStorage.setItem("favorites", JSON.stringify(favoriteItems));
    }
  }, [favoriteItems, cartItem]);
  function onAddFavorite() {
    setFavorite((state) => !state);
    if (!isFavorite) {
      dispatch(addToFavorite({ imageUrl, price, title, id }));
    } else {
      dispatch(deleteFromFavorite(id));
    }
  }
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onAddFavorite}>
        <img
          src={
            !favoriteItems.find((item) => item.id === id)
              ? "img/unliked.svg"
              : "img/liked.svg"
          }
          alt="unliked"
        />
      </div>
      <img src={imageUrl} alt="sneaker" width={133} height={112} />
      <h5>{title}</h5>
      <div className={styles.cardBottom}>
        <div className={styles.cardPrice}>
          <span>Цена:</span>
          <b>{price} грн.</b>
        </div>
        <button onClick={onAddCard}>
          <img
            src={!isAdded ? "img/btn-plus.svg" : "img/btn-checked.svg"}
            alt="Add Card"
          />
        </button>
      </div>
    </div>
  );
}

export default Card;
