import { Book } from "@prisma/client"
import { axiosInstance } from "./instance"
import { ApiRoutes } from "./constants"


export const search = async(query: string):Promise<Book[]> => {
    const {data} = await axiosInstance.get<Book[]>(ApiRoutes.SEARCH_PRODUCTS, {params: {query}})
 
    
    return data
}