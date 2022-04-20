import { types } from "../types/types";

const initialState = {
    data: [],
    activeItemMenu: null,
}

export const menuReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.menuSetData:
            return {
                ...state,
                data: action.payload
            }
        case types.menuSetActiveItemMenu:
            return {
                ...state,
                activeItemMenu: action.payload
            }
        case types.menuDeleteItemMenu:
            return {
                ...state,
                data: state.data.filter(item => item.id !== action.payload.id)
            }
        case types.menuAddItemMenu:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        
        case types.menuUpdateItemMenu:
            return {
                ...state,
                data: state.data.map(item => item.id === action.payload.id ? action.payload : item)
            }
        case types.menuCleanActiveItemMenu:
            return {
                ...state,
                activeItemMenu: null
            }
        case types.menuClearData:
            return {
               ... initialState
            }
        default:
            return state;
    }
}