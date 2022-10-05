import { ICard } from "../app/slices/card";

export default function setTotalPrice(items: ICard[]) {
  return items.reduce((current, next) => current + next.price, 0)
}