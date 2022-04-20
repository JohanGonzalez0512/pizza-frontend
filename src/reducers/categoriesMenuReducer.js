import { types } from "../types/types";

const initialState = {
    data: [],
    activeCategory: null,
}

export const categoriesMenuReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.categoriesMenuSetData:
            return {
                ...state,
                data: action.payload
            }
        case types.categoriesMenuSetActiveCategoryMenu:
            return {
                ...state,
                activeCategory: action.payload
            }
        case types.categoriesMenuDeleteCategoryMenu:
            return {
                ...state,
                data: state.data.filter(category => category.id !== action.payload.id)
            }
        case types.categoriesMenuAddCategoryMenu:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        
        case types.categoriesMenuUpdateCategoryMenu:
            return {
                ...state,
                data: state.data.map(category => category.id === action.payload.id ? action.payload : category)
            }
        case types.categoriesMenuCleanActiveCategoryMenu:
            return {
                ...state,
                activeCategory: null
            }
        case types.categoriesMenuClearData:
            return {
                ...initialState
            }
        default:
            return state;
    }
}