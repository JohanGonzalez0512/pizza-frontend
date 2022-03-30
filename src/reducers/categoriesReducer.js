import { types } from "../types/types";

const initialState = {
    data: [],
    activeCategory: null,
}

export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.categoriesSetData:
            return {
                ...state,
                data: action.payload
            }
        case types.categoriesSetActiveCategory:
            return {
                ...state,
                activeCategory: action.payload
            }
        case types.categoriesDeleteCategory:
            return {
                ...state,
                data: state.data.filter(category => category.id !== action.payload.id)
            }
        case types.categoriesAddCategory:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        
        case types.categoriesUpdateCategory:
            return {
                ...state,
                data: state.data.map(category => category.id === action.payload.id ? action.payload : category)
            }
        case types.categoriesCleanActiveCategory:
            return {
                ...state,
                activeCategory: null
            }
        case types.categoriesClearData:
            return {
                initialState
            }
        default:
            return state;
    }
}