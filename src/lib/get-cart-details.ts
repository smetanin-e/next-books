import { CartDTO } from "../../services/dto/cart.dto"

//! Тип CartDTO это весь объект корзины, который вернет сервер. Из него берем только то что
//! необходимо, типизируем это как CartStateItem и сохраняем в state

export type CartStateItem = {
    id: number
    quantity: number
    title: string
    imageUrl: string
    author: string
    price: number
    totalPrice: number
}

interface ReturnProps {
    items: CartStateItem[]
    totalAmount: number
}
export const getCartDetails = (data: CartDTO): ReturnProps => {
    const items = data.cartItems.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        title: item.book.title,
        imageUrl: item.book.imageUrl,
        author: item.book.author,
        price: item.book.price,
        totalPrice: item.book.price * item.quantity
    }))
 return {
    totalAmount: data.totalAmount,
    items,
 }
}