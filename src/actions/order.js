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
export const orderAddQuantity = (order) => ({
    type: types.orderAddQuantity,
    payload: order
})
export const orderDeleteQuantity = (order) => ({
    type: types.orderDeleteQuantity,
    payload: order
})
export const orderDeleteItemCart = (order) => ({
    type: types.orderDeleteItemCart,
    payload: order
})

