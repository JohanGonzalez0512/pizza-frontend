import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { ordersReducer } from "./ordersReducer";
import { uiReducer } from "./uiReducer";
import {categoriesReducer} from "./categoriesReducer";
import { productsReducer } from "./productsReducer";
import { stockReducer } from "./stockReducer";
export const rootReducers = combineReducers({
    auth: authReducer,
    orders: ordersReducer,
    ui: uiReducer,
    categories: categoriesReducer,
    products: productsReducer,
    stock: stockReducer
})