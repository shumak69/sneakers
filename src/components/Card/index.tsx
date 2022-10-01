import styles from "./Card.module.scss";
import { useState } from "react";
import { ICard } from "../../app/slices/card";
import { useAppDispatch } from "../../app/hooks";
import { addToCart, deleteFromCart } from "../../app/slices/cart";
interface CardProps extends ICard {
  onAddCard: () => void;
  onFavorite: () => void;
}
function Card({ imageUrl, price, title, onFavorite, id }: CardProps) {
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useAppDispatch();
  function onAddCard() {
    setIsAdded((state) => !state);
    if (!isAdded) {
      dispatch(addToCart({ imageUrl, price, title, id }));
    } else {
      dispatch(deleteFromCart(id));
    }
  }
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img src="img/unliked.svg" alt="unliked" />
      </div>
      <img src={imageUrl} alt="sneaker" width={133} height={112} />
      <h5>{title}</h5>
      <div className={styles.cardBottom}>
        <div className={styles.cardPrice}>
          <span>Цена:</span>
          <b>{price} грн.</b>
        </div>
        <button onClick={onAddCard}>
          <img src={!isAdded ? "img/btn-plus.svg" : "img/btn-checked.svg"} alt="Add Card" />
        </button>
      </div>
    </div>
  );
}

export default Card;
