import { types } from "../types/types";

const initialState = {
    user: {

    },
    logged: false,
    checking: false,
    forgotPassword: {
        email: '',
        newPassword: '',
        code: ''

    }
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                user: { ...action.payload },
                logged: true
            }
        case types.authSetEmail:
            return {
                ...state,
                forgotPassword: {
                    ...state.forgotPassword,
                    email: action.payload
                }
            }

        case types.authSetCodeAndPassword:
            return {
                ...state,
                forgotPassword: { ...action.payload }
            }
        case types.authForgotPasswordCleaning:
            return {
                ...state,
                forgotPassword: {
                    email: '',
                    newPassword: '',
                    code: ''
                }

            }

        case types.authCheckingFinish:
            return {
                ...state,
                checking: false
            }
        case types.authCheckingStart:
            return {
                ...state,
                checking: true
            }
        case types.authLogout:
            return {
                ...state,
                user: {},
                logged: false,
            }

        default:
            return state;
    }
}