import {  Tag } from "@prisma/client"
import React from "react"
import { Api } from "../../../services/api-clients";

interface ReturnProps {
    tags: Tag[]
    loading: boolean
}
export const useTags = (): ReturnProps => {
    const [tags, setTags] = React.useState<Tag[]>([]);
  
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchTags() {
            try {
                setLoading(true)
                const tags = await Api.tags.getTags()
                setTags(tags)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        fetchTags();
    }, [])
    return {tags, loading}
}