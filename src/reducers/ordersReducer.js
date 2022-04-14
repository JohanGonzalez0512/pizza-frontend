import { types } from "../types/types";

const initialState = {
    options: [
        {

            id: 1,
            category: "Combos",
        },
        {
            id: 0,
            category: "Pizzas",
        },
        {
            id: 10,
            category: "fsdfds",
        },
        {
            id: 3,
            category: "sdfdsfdsf",
        },
    ],
    itemListData:
        [
            {
                id: 1,
                name: 'pizza flamas',
                price: '800',
                elements: [
                    {
                        type: 'radio',
                        name: 'element',
                        value: '',
                        header: 'ingredientes',
                        adjuncts: [
                            {
                                value: 'id_1',
                                label: 'papas'
                            },
                            {
                                value: 'id_2',
                                label: 'Jadasdsamon'
                            },
                            {
                                value: 'id_3',
                                label: 'Cadasdrne molida'

                            },
                        ],
                        validations: [
                            {
                                type: 'requiredRadio'
                            }
                        ]
                    },
                    {
                        header: 'ingredientes 2',
                        type: 'checkbox',
                        name: 'extras',
                        value: [],
                        adjuncts: [
                            {
                                value: 'id_1',
                                label: 'Peperoni2'

                            },
                            {
                                value: 'id_2',
                                label: 'Jamon2'
                            },
                            {
                                value: 'id_3',
                                label: 'Carne molida3'

                            },
                        ],
                        validations: [
                            {
                                type: 'requiredCheck'
                            }
                        ]
                    },
                    {
                        header: 'ingredientes 3',
                        type: 'checkbox',
                        name: 'extras2',
                        value: [],
                        adjuncts: [
                            {
                                value: 'id_1',
                                label: 'Peperoni3'

                            },
                            {
                                value: 'id_2',
                                label: 'Jamon3'
                            },
                            {
                                value: 'id_3',
                                label: 'Carne molida3'

                            },
                        ],
                        validations: [
                            {
                                type: 'requiredCheck'
                            }
                        ]
                    },



                ],
            },

        ],
    orderActive: {},
    isActiveItem: false,
    cart: [],
    FinalPrice: 0,
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

        case types.orderAddToCart:
            return {
                ...state,
                cart: [
                    ...state.cart,
                    {
                        id: state.orderActive.id,
                        name: state.orderActive.name,
                        price: parseInt(state.orderActive.price) + action.payload.extras.length * 15,
                        startPrice: parseInt(state.orderActive.price) + action.payload.extras.length * 15,
                        quantity: 1,
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

        case types.orderDeleteItemCart:
            return {
                ...state,
                cart: state.cart.filter((_, i) => i !== action.payload)
            };

        default:
            return state;
    }
}