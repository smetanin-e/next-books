import { create } from "zustand"

interface State {
    drawerOpen: boolean
    setDrawerOpen: (drawerOpen: boolean) => void
}

export const useAppDrawerStore = create<State>()((set) => ({
    drawerOpen: false,
    setDrawerOpen: (drawerOpen: boolean) => set({drawerOpen})
}))