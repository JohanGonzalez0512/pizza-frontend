import { types } from "../types/types";

const initialState = {
    data: [],
    activeStock: null,
}

export const stockReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.stockSetData:
            return {
                ...state,
                data: action.payload
            }
        case types.stockSetActiveStock:
            return {
                ...state,
                activeStock: action.payload
            }
        case types.stockDeleteStock:
            return {
                ...state,
                data: state.data.filter(stock => stock.id !== action.payload.id)
            }
        case types.stockAddStock:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        
        case types.stockUpdateStock:
            return {
                ...state,
                data: state.data.map(stock => stock.id === action.payload.id ? action.payload : stock)
            }
        case types.stockCleanActiveStock:
            return {
                ...state,
                activeStock: null
            }
        case types.stockClearData:
            return {
                ...initialState
            }
        default:
            return state;
    }
}