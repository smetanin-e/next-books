import { Book, Cart, CartItem } from "@prisma/client";


export type CartItemDTO = CartItem & {
 book: Book
}

export interface CartDTO extends Cart {
    cartItems: CartItemDTO[]
}