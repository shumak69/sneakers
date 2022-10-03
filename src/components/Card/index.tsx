import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ICard } from "../../app/slices/card";
import { addToCart, deleteFromCart } from "../../app/slices/cart";
import { addToFavorite, deleteFromFavorite } from "../../app/slices/favorite";
import styles from "./Card.module.scss";

function Card({ imageUrl, price, title, id }: ICard) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setFavorite] = useState(false);
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.favorite);
  function onAddCard() {
    setIsAdded((state) => !state);
    if (!isAdded) {
      dispatch(addToCart({ imageUrl, price, title, id }));
    } else {
      dispatch(deleteFromCart(id));
    }
  }
  function onAddFavorite() {
    setFavorite((state) => !state);
    if (!isFavorite) {
      dispatch(addToFavorite({ imageUrl, price, title, id }));
    } else {
      dispatch(deleteFromFavorite(id));
    }
  }
  console.log(items.find((item) => item.id === id));
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onAddFavorite}>
        <img
          src={
            !items.find((item) => item.id === id)
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
