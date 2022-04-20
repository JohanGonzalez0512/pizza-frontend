import { types } from "../types/types";

const initialState = {
    data: [],
    activeProduct: null,
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.productsSetData:
            return {
                ...state,
                data: action.payload
            }
        case types.productsSetActiveProduct:
            return {
                ...state,
                activeProduct: action.payload
            }
        case types.productsDeleteProduct:
            return {
                ...state,
                data: state.data.filter(product => product.id !== action.payload.id)
            }
        case types.productsAddProduct:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        
        case types.productsUpdateProduct:
            return {
                ...state,
                data: state.data.map(product => product.id === action.payload.id ? action.payload : product)
            }
        case types.productsCleanActiveProduct:
            return {
                ...state,
                activeProduct: null
            }
        case types.productsClearData:
            return {
                ...initialState
            }
        default:
            return state;
    }
}