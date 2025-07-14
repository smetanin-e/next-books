{/**
*Сохраняем id книги, чтобы когда нажимаем
 на счетчик, показывать индикатор загрузки на конкретной книге    
*/}

import { create } from "zustand"

interface State {
    cartItemId: number | null
    setCartItemId: (cartItemId: number) => void
}

export const useCountButtonsBookId = create<State>()((set) => ({
    cartItemId: null,
    setCartItemId: (cartItemId: number) => set({cartItemId})
}))