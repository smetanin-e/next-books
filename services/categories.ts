
import { axiosInstance } from "./instance"
import { ApiRoutes } from "./constants"
import { Category } from "@prisma/client";



export const getCategories = async():Promise<Category[]> => {
    const {data} = await axiosInstance.get<Category[]>(ApiRoutes.CATEGORIES)

    
    return data
}