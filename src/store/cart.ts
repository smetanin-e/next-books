/* eslint-disable @typescript-eslint/no-unused-vars */

import { create } from "zustand";
import { Api } from "../../services/api-clients";
import { getCartDetails } from "@/lib";
import { CartStateItem } from "@/lib/get-cart-details";



interface CatrState {
    loading: boolean
    error: boolean
    items: CartStateItem[]
    totalAmount: number
    totalPrice: number
   
   /* Запрос на получение товаров из корзины */
   getCartItems: () => Promise<void>

    /* Запрос на обновление количества товаров */
   updateItemsQuantity: (id: number, quantity: number) => Promise<void>

    /* Запрос на добавление товара в корзину */
   addCartItem: (values: any) => Promise<void>

     /* Запрос на удаление товара из корзины */
   removeCartItem: (id: number) => Promise<void>
}

export const useCartStore = create<CatrState>()((set) => ({
    loading: true,
    error: false,
    items: [],
    totalAmount: 0,
    totalPrice: 0,

    getCartItems: async () => {
        try{
            set({loading: true, error: false})
            const data = await Api.cart.getCart()
            set(getCartDetails(data))
        } catch (e) {
            console.error(e)
            set({error: true})
        } finally {
            set({loading: false})
        }
    },

    updateItemsQuantity: async (id: number, quantity: number) => {
        try{
            set({loading: true, error: false})
            const data = await Api.cart.updateItemQuantity(id, quantity)
            set(getCartDetails(data))
        } catch (e) {
            console.error(e)
            set({error: true})
        } finally {
            set({loading: false})
        }
    },

    addCartItem: async (values: any) => {},
    
    removeCartItem: async (id: number) => {
        try{
            set({loading: true, error: false})
            const data = await Api.cart.removeCartItem(id)
            set(getCartDetails(data))
        } catch (e) {
            console.error(e)
            set({error: true})
        } finally {
            set({loading: false})
        }
    }
}))