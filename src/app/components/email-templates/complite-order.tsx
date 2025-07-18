import React from 'react';
import { CartItemDTO } from '../../../../services/dto/cart.dto';

interface Props {
  orderId: number;
  items: CartItemDTO[];
}

export const CompliteOrderTemplate: React.FC<Props> = ({ orderId, items }) => {
  return (
    <div>
      <h1>Спасибо за покупку</h1>
      <p>Ваш заказ № {orderId} оплачен. Список товаров</p>
      <hr />
      <ul>
        {items.map((item) => (
          <li key={item.bookId}>
            {item.book.title} | {item.book.price} ₽ X {item.quantity} шт. ={' '}
            {item.book.price * item.quantity} ₽
          </li>
        ))}
      </ul>
    </div>
  );
};
