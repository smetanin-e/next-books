import { Book, Category, SubCategory } from "@prisma/client";
import { create } from "zustand";
import { Api } from "../../services/api-clients";

type CategoryProps = Category & {books?: Book[]}
type SubCategoryProps = SubCategory & {books?: Book[]}

interface CategoriesState {
    categories: CategoryProps[]
    subcategories: SubCategoryProps[]
    loading: boolean
    getCategories: () => Promise<void>
}

export const useCategoriesStore = create<CategoriesState>()((set) => ({
    categories: [],
    subcategories: [],
    loading: true,
    getCategories: async () => {
        try {
            const dataCategories =await Api.categories.getCategories()
            const dataSubcategories =await Api.subcategories.getSubCategories()
            set({categories: dataCategories})
            set({subcategories: dataSubcategories})
        } catch (e) {
            console.error(e)
        } finally {
            set({loading: false})
        }
    },
   
}))