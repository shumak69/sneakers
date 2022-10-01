import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "./Drawer.module.scss";
import { openCart } from "../../app/slices/card";
import CartItem from "../CartItem";
function Drawer() {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.cart);
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2>
          Корзина{" "}
          <svg
            className="removeBtn close"
            onClick={() => dispatch(openCart(false))}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB" />
            <path
              d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
              fill="#B5B5B5"
            />
          </svg>
        </h2>
        <div className={styles.items}>
          {items.map((item) => (
            <CartItem {...item} key={item.id} />
          ))}
        </div>

        <div className={styles.cardTotalBlock}>
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>10 435 грн</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ{" "}
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
      </div>
    </div>
  );
}

export default Drawer;
