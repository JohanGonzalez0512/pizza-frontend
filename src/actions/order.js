import { types } from "../types/types";


export const orderSetActive = (order) => ({
    type: types.orderSetActiveItem,
    payload: order
})
export const orderSetIsActive = () => ({
    type: types.orderSetIsActive,
})

export const orderAddToCart = (order) => ({
    type: types.orderAddToCart,
    payload: order
})

