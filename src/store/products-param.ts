// Сохраняем имя категории, подкатегории или тега, по которому в БД найдем нужные книги

import { create } from "zustand"

interface State {
    value: string | null
    setValue: (value: string | null) => void
}

export const useProductsParamStore = create<State>()((set) => ({
    value: '',
    setValue: (value: string | null) => set({value})
}))