import { types } from "../types/types";

const initialState = {
    isModalOpen: false,

    loading: false,
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiSetIsModalOpen:
            return {
                ...state,
                isModalOpen: !state.isModalOpen
            }
        case types.uiStartLoading:
            return {
                ...state,
                loading: true,
            }
        case types.uiFinishLoading:
            return {
                ...state,
                loading: false,
            }
        default:
            return state;
    }
}