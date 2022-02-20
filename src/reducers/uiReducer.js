import { types } from "../types/types";

const initialState = {
    isModalOpen: false,
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiSetIsModalOpen:
            return {
                ...state,
                isModalOpen: !state.isModalOpen
            }
        default:
            return state;
    }
}