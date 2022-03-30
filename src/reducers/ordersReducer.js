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
                                type: 'required'
                            }
                        ]
                    },
                    {
                        header: 'ingredientes 2',
                        type: 'checkbox',
                        name: 'extras',
                        value: '',
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



                ],
            },
         
        ],
    orderActive: {},
    isActiveItem: false,
    cart: [],
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

            let cartItemFound = state.cart.filter(cartItem =>
                cartItem.id == action.payload.id &&
                cartItem.idIngs.length === action.payload.idIngs.length
            );

            if (cartItemFound) cartItemFound = (cartItemFound.find((cartItem) =>
                action.payload.idIngs.every((element) =>
                    cartItem.idIngs.includes(element))));

            if (!cartItemFound) {

                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }]
                }
            }

            cartItemFound.quantity = cartItemFound.quantity + 1;

            cartItemFound.extras ? cartItemFound.price = cartItemFound.price + (cartItemFound.extras.length * 15)
                : cartItemFound.price = cartItemFound.price;

            return {
                ...state,
                cart: state.cart.map(cartItem => (
                    cartItem.id == action.payload.id &&
                        cartItem.idIngs.length === action.payload.idIngs.length &&
                        action.payload.idIngs.every((element) => cartItem.idIngs.includes(element))
                        ? cartItemFound
                        : cartItem

                ))
            }

        case types.orderAddQuantity:
            const cartQuantity = state.cart.find(cartItem =>
                cartItem.id == action.payload.id &&
                cartItem.idIngs.length === action.payload.idIngs.length &&
                action.payload.idIngs.every((element) => cartItem.idIngs.includes(element))

            )
            cartQuantity.quantity = cartQuantity.quantity + 1;
            cartQuantity.price = cartQuantity.price * cartQuantity.quantity;

            return {
                ...state,

                cart: state.cart.map(cartItem => (
                    cartItem.id == action.payload.id &&
                        cartItem.idIngs.length === action.payload.idIngs.length &&
                        action.payload.idIngs.every((element) => cartItem.idIngs.includes(element))
                        ? cartQuantity
                        : cartItem

                ))

            };
        case types.orderDeleteQuantity:

            const cartQuantityMinus = state.cart.find(cartItem =>
                cartItem.id == action.payload.id &&
                cartItem.idIngs.length === action.payload.idIngs.length &&
                action.payload.idIngs.every((element) => cartItem.idIngs.includes(element))

            )
            cartQuantityMinus.quantity = cartQuantityMinus.quantity - 1
            cartQuantity.price = cartQuantity.price * cartQuantity.quantity;
            return {
                ...state,

                cart: state.cart.map(cartItem => (
                    cartItem.id === action.payload.id &&
                        cartItem.idIngs.length === action.payload.idIngs.length &&
                        action.payload.idIngs.every((element) => cartItem.idIngs.includes(element))
                        ? cartQuantityMinus
                        : cartItem

                ))

            };

        case types.orderDeleteItemCart:

            let itemToDelete = state.cart.filter(cartItem =>
                cartItem.id == action.payload.id &&
                cartItem.idIngs.length === action.payload.idIngs.length

            );
            if (itemToDelete) itemToDelete = (itemToDelete.find((cartItem) => 
            action.payload.idIngs.every((element) => cartItem.idIngs.includes(element))))

            return {
                ...state,
                cart: state.cart.filter(cartItem => (
                    cartItem !== itemToDelete
                ))
            }
        default:
            return state;
    }
}