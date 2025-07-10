
import { ApiRoutes } from "./constants"
import { axiosInstance } from "./instance"
import { CartDTO } from "./dto/cart.dto"

export const getCart = async():Promise<CartDTO> => {
    const {data} = await axiosInstance.get<CartDTO>(ApiRoutes.CART)

    return data
}

export const updateItemQuantity = async (itemId: number, quantity: number):Promise<CartDTO> => {
    const {data} = await axiosInstance.patch<CartDTO>('/cart/' + itemId, {quantity})
    return data
    //return (await axiosInstance.patch<CartDTO>('/cart/' + itemId, {quantity})).data
}

export const removeCartItem = async (itemId: number):Promise<CartDTO> => {
    const {data} = await axiosInstance.delete<CartDTO>('/cart/' + itemId)
    return data
    //return (await axiosInstance.patch<CartDTO>('/cart/' + itemId, {quantity})).data
}

