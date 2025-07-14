import { Tag } from "@prisma/client"
import { create } from "zustand"
import { Api } from "../../services/api-clients"

interface TagsState {
    tags: Tag[]
    loading: boolean
    getTags: () => Promise<void>
}

export const useTagsStore = create<TagsState>()((set) => ({
    tags: [],
    loading: false,
    getTags: async () => {
        try {
            set({loading:true})
            const data =await Api.tags.getTags()
            set({tags: data})
        } catch (e) {
            console.error(e)
        } finally {
            set({loading: false})
        }
    }
}))