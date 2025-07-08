import { axiosInstance } from "./instance"
import { ApiRoutes } from "./constants"
import { Tag } from "@prisma/client";


export const getTags = async():Promise<Tag[]> => {
    const {data} = await axiosInstance.get<Tag[]>(ApiRoutes.TAGS)

    
    return data
}