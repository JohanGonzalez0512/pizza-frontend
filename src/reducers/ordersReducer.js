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
                ingredients: [
                    { category: 'carnes', ingredients: ['Peperoni', 'Jamon', 'Carne molida'] },
                    { category: 'vegetales', ingredients: ['Tomate', 'Cebolla', 'Lechuga'] },
                    { category: 'queso', ingredients: ['Queso Manchego', 'Queso parmesano', 'Queso cheddar'] },
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
            // Todo este despapaye es porque quería poder juntar las pizzas que coincidieran en ID y en ingredientes,
            // Porque si quiero mostrar en el carrito, no creo que este bien solo mostrar el tema de la pizza que selecciono y 
            // en otro item otra pizza exactamente igual, segun yo, ahí se muestran dos pizzas distintas. 
            
            const cartItem = state.cart.filter(cartItem => (cartItem.id === action.payload.id) && cartItem.idIng === action.payload.idIng);
            console.log(cartItem);
            if (cartItem.length > 0) {
                return {
                    ...state,
                    cart: state.cart.map(cartItem =>
                        cartItem.id === action.payload.id
                            ? { ...cartItem, quantity: cartItem.quantity + 1 }
                            : cartItem
                    ),
                }
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }]
                }
            }

        default:
            return state;
    }
}