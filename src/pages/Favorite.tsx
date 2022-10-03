import { useAppSelector } from "../app/hooks";
import Card from "../components/Card";

function Favorite() {
  const { items } = useAppSelector((state) => state.favorite);
  return (
    <div>
      <div className="content">
        <div className="cardWrapper">
          {items.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favorite;
