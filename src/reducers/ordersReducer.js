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
                        header: 'ingredientes',
                        adjuncts: ['Peperoni', 'Jamon', 'Carne molida']
                    },
                    {
                        header: 'ingredientes 2',
                        adjuncts: ['Peperoni2', 'Carne molida2']
                    },


                ],
            },
            {
                id: 2,
                name: 'pizza flamas2',
                price: '800',
                ingredients: [
                    { category: 'carnes', ingredients: ['Peperoni', 'Jamon', 'Carne molida'] },
                    { category: 'vegetales', ingredients: ['Tomate', 'Cebolla', 'Lechuga'] },
                    { category: 'queso', ingredients: ['Queso Manchego', 'Queso parmesano', 'Queso cheddar'] },
                ],
            },
            {
                id: 3,
                name: 'pizza flamas3',
                price: '800',
                ingredients: [
                    { category: 'carnes', ingredients: ['Peperoni', 'Jamon', 'Carne molida'] },
                    { category: 'vegetales', ingredients: ['Tomate', 'Cebolla', 'Lechuga'] },
                    { category: 'queso', ingredients: ['Queso Manchego', 'Queso parmesano', 'Queso cheddar'] },
                ],
            },
            {
                id: 4,
                name: 'pizza flamas4',
                price: '800',
                ingredients: [
                    { category: 'carnes', ingredients: ['Peperoni', 'Jamon', 'Carne molida'] },
                    { category: 'vegetales', ingredients: ['Tomate', 'Cebolla', 'Lechuga'] },
                    { category: 'queso', ingredients: ['Queso Manchego', 'Queso parmesano', 'Queso cheddar'] },
                ],
            },
            {
                id: 5,
                name: 'pizza flamas4',
                price: '800',
                ingredients: [
                    { category: 'carnes', ingredients: ['Peperoni', 'Jamon', 'Carne molida'] },
                    { category: 'vegetales', ingredients: ['Tomate', 'Cebolla', 'Lechuga'] },
                    { category: 'queso', ingredients: ['Queso Manchego', 'Queso parmesano', 'Queso cheddar'] },
                ],
            },
            {
                id: 6,
                name: 'pizza flamas4',
                price: '800',
                ingredients: [
                    { category: 'carnes', ingredients: ['Peperoni', 'Jamon', 'Carne molida'] },
                    { category: 'vegetales', ingredients: ['Tomate', 'Cebolla', 'Lechuga'] },
                    { category: 'queso', ingredients: ['Queso Manchego', 'Queso parmesano', 'Queso cheddar'] },
                ],
            },
            {
                id: 7,
                name: 'pizza flamas4',
                price: '800',
                ingredients: [
                    { category: 'carnes', ingredients: ['Peperoni', 'Jamon', 'Carne molida'] },
                    { category: 'vegetales', ingredients: ['Tomate', 'Cebolla', 'Lechuga'] },
                    { category: 'queso', ingredients: ['Queso Manchego', 'Queso parmesano', 'Queso cheddar'] },
                ],
            }
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
            if (cartItemFound) cartItemFound = (cartItemFound.find((cartItem) => action.payload.idIngs.every((element) => cartItem.idIngs.includes(element))))


            if (!cartItemFound) {

                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }]
                }
            }

            cartItemFound.quantity = cartItemFound.quantity + 1
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
            cartQuantity.quantity = cartQuantity.quantity + 1
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
            if (itemToDelete) itemToDelete = (itemToDelete.find((cartItem) => action.payload.idIngs.every((element) => cartItem.idIngs.includes(element))))

            return {
                ...state,
                cart: state.cart.filter(cartItem =>
                    cartItem.id !== action.payload.id &&
                    cartItem.idIngs.length !== action.payload.idIngs.length &&
                    action.payload.idIngs.every((element) => !(cartItem.idIngs.includes(element)))

                )

            };



        default:
            return state;
    }
}