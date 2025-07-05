import { axiosInstance } from "./instance"
import { ApiRoutes } from "./constants"
import { SubCategory } from "@prisma/client";


export const getSubCategories = async():Promise<SubCategory[]> => {
    const {data} = await axiosInstance.get<SubCategory[]>(ApiRoutes.SUBCATEGORIES)

    
    return data
}