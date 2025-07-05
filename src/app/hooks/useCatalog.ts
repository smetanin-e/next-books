import { Category, SubCategory } from "@prisma/client"
import React from "react"
import { Api } from "../../../services/api-clients";

interface ReturnProps {
    categories: Category[]
    subcategories: SubCategory[]
}
export const useCatalog = (): ReturnProps => {
    const [categories, setCategories] = React.useState<Category[]>([]);
    const [subcategories, setSubcategories] = React.useState<SubCategory[]>([]);

    React.useEffect(() => {
        async function fetchCategories() {
            try {
                const categories = await Api.categories.getCategories()
                setCategories(categories)

                const subcategories = await Api.subcategories.getSubCategories()
                setSubcategories(subcategories)
            } catch (error) {
                console.error(error)
            }
        }

        fetchCategories();
    }, [])
    return {categories, subcategories}
}