import { types } from "../types/types";

const initialState = {

    itemListData: [],
    orderActive: {},
    isActiveItem: false,
    cart: [],
    data: [],
    total: 0,
};


export const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.orderSetActiveItem:
            return {
                ...state,
                orderActive: action.payload,
                isActiveItem: !state.isActiveItem,
            };
        case types.orderSetIsActive:
            return {
                ...state,
                isActiveItem: !state.isActiveItem,
            };

        case types.orderClearOrder:
            return {
                ...state,
                orderActive: {},
                cart: [],
                isActiveItem: false,
                total: 0,
            };

        case types.orderCancelOrder:
            return {
                ...state,
                data: state.data.map(item => item.id === action.payload.id ? action.payload : item)
            };

        case types.orderCompleteOrder:
            return {
                ...state,
                data: state.data.map(item => item.id === action.payload.id ? action.payload : item)
            };

        case types.orderAddToCart:
            return {
                ...state,
                cart: [
                    ...state.cart,
                    {
                        id: state.orderActive.id,
                        name: state.orderActive.name,
                        is_pre_built: state.orderActive.is_pre_built,
                        price: parseInt(state.orderActive.price) + action.payload.extras.length * 15,
                        startPrice: parseInt(state.orderActive.price) + action.payload.extras.length * 15,
                        quantity: 1,
                        ...action.payload
                    }
                ],
            };


        case types.orderAddItemOrder:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case types.orderSetDataForms:
            return {
                ...state,
                itemListData: action.payload,
            }

        case types.orderSetData:
            return {
                ...state,
                data: action.payload,
            }
        case types.orderAddToCartPreBuild:
            return {
                ...state,
                cart: [
                    ...state.cart,
                    {
                        id: action.payload.id,
                        name: action.payload.name,
                        price: parseInt(action.payload.price),
                        startPrice: parseInt(action.payload.price),
                        quantity: 1,
                        is_pre_built: state.orderActive.is_pre_built,
                        ...action.payload
                    }
                ],
            };

        case types.orderAddQuantity:
            return {
                ...state,
                cart: state.cart.map((item, i) => (
                    {
                        ...item,
                        quantity: item.quantity + (i === action.payload ? 1 : 0), //si es el mismo item suma 1
                        price: item.startPrice * (item.quantity + (i === action.payload ? 1 : 0))
                    }
                ))
            };
        case types.orderMinusQuantity:

            if (state.cart[action.payload].quantity === 1) {
                return {
                    ...state,
                    cart: state.cart.filter((_, i) => i !== action.payload)
                }
            }

            return {
                ...state,
                cart: state.cart.map((item, i) => (
                    {
                        ...item,
                        quantity: item.quantity - (i === action.payload ? 1 : 0),
                        price: item.startPrice * (item.quantity - (i === action.payload ? 1 : 0))
                    }
                ))
            };

        case types.orderGetTotal:
            return {
                ...state,
                total: state.cart.map((item) => parseFloat(item.price)).
                    reduce((a, b) => a + b, 0)
                // item.price + total
            };

        case types.orderDeleteItemCart:
            return {
                ...state,
                cart: state.cart.filter((_, i) => i !== action.payload)
            };

        case types.orderLogout:
            return{

                ...initialState
            } 
            
        default:
            return state;
    }
}