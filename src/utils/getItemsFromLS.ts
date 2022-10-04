import { ICard } from "../app/slices/card";

export function getItems(LSName: string) : ICard[] {
  const data = localStorage.getItem(LSName)
  return data ? JSON.parse(data) : []
}

// export function getCartItems() : ICard[] {
//   const data = localStorage.getItem('cart')
//   return data ? JSON.parse(data) : []
// }