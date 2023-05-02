import { create } from 'zustand'

export const useBearStore = create(
    (set) => (
    {
        bears: 0,
        increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
        removeAllBears: () => set({ bears: 0 }),
    }
))

export const useShoppingCart = create(
    (set) => (
        {
            cart: [],
            addProduct: (product) => set((state) => ({cart: [...state.cart, product]}))
        }
    )
)