
import { CartStateItem } from "./get-cart-details";

  export const totalSale = (items:CartStateItem[]) => {
    const saleItems = items.filter((item) => item.sale !== null);
    const sale = saleItems.reduce((acc, item) => {
    return acc + (Math.ceil(item.price / (1 - item.sale! / 100)) - item.price) * item.quantity;
  }, 0);

  return sale
  }