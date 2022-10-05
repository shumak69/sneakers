import axios from "axios";
import { useEffect, useState } from "react";
import { ICard } from "../app/slices/card";
import Card from "../components/Card";
import styles from "../components/Card/Card.module.scss";
import MyLoader from "../components/Loader";
type OrdersState = {
  id: string;
  items: ICard[];
};

function Orders() {
  function ordersRender() {
    return orders?.map((order) => {
      console.log(order);
      return (
        <>
          <h2 style={{ margin: "20px 0" }}>Заказ #{order.id}</h2>
          <div className="cardWrapper">
            {order.items.map((card) => (
              <Card key={card.id} {...card} disFavorite disPlus />
            ))}
          </div>
        </>
      );
    });
  }
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [orders, setOrders] = useState<OrdersState[] | null>(null);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get<OrdersState[]>("https://6335d63a8aa85b7c5d2408e2.mockapi.io/orders")
      .then((res) => setOrders(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);
  if (error) {
    return (
      <div className="error">
        <h1>Не удалось отобразить заказы</h1>
        <div>
          Причина: <span>{error}</span>
        </div>
      </div>
    );
  }
  return (
    <div className="orders">
      <h1>Мои заказы</h1>
      <div className="content">
        <div>
          {isLoading ? (
            <div className="cardWrapper">
              {[...Array(10)].map((_, i) => (
                <div className={styles.card} style={{ padding: 0 }} key={i}>
                  <MyLoader />
                </div>
              ))}
            </div>
          ) : (
            ordersRender()
          )}
        </div>
      </div>
    </div>
  );
}

export default Orders;
