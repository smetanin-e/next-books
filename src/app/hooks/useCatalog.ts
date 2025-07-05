import { Category, SubCategory } from "@prisma/client"
import React from "react"
import { Api } from "../../../services/api-clients";

interface ReturnProps {
    categories: Category[]
    subcategories: SubCategory[]
    loading: boolean
}
export const useCatalog = (): ReturnProps => {
    const [categories, setCategories] = React.useState<Category[]>([]);
    const [subcategories, setSubcategories] = React.useState<SubCategory[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchCategories() {
            try {
                setLoading(true)
                const categories = await Api.categories.getCategories()
                setCategories(categories)

                const subcategories = await Api.subcategories.getSubCategories()
                setSubcategories(subcategories)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        fetchCategories();
    }, [])
    return {categories, subcategories, loading}
}