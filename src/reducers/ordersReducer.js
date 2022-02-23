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
            

            if (!state.cart.find(cartItem => cartItem.id == action.payload.id)){
                
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }]
                }
            }

                if (state.cart.find(cartItem => cartItem.id == action.payload.id && cartItem.idIngs.length===action.payload.idIngs.length && action.payload.idIngs.sort().every((element, i) => element == cartItem.idIngs.sort()[i]))){
                    const resultado = state.cart.find(cartItem => cartItem.id == action.payload.id && cartItem.idIngs.length===action.payload.idIngs.length && action.payload.idIngs.sort().every((element, i) => element == cartItem.idIngs.sort()[i]))
                    return {
                            ...state,
                             cart: state.cart.map(cartItem => (
                                 cartItem.id === resultado.id
                                     ? cartItem.idIngs.length===action.payload.idIngs.length && action.payload.idIngs.sort().every((element, i) => element == cartItem.idIngs.sort()[i])
                                         ? { ...cartItem, quantity: cartItem.quantity + 1 }
                                         : cartItem
                                       
                                     : cartItem
                             ))
                         }
                    
                }

                if (state.cart.find(cartItem => cartItem.id == action.payload.id && !(cartItem.idIngs.length===action.payload.idIngs.length) && !action.payload.idIngs.sort().every((element, i) => element == cartItem.idIngs.sort()[i]))){

                    return {
                        ...state,
                        cart: [...state.cart, { ...action.payload, quantity: 1 }]
                    }
                }

        default:
            return state;
    }
}