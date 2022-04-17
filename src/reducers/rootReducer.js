import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { ordersReducer } from "./ordersReducer";
import { uiReducer } from "./uiReducer";
import {categoriesReducer} from "./categoriesReducer";
import { productsReducer } from "./productsReducer";
import { stockReducer } from "./stockReducer";
import { categoriesMenuReducer } from "./categoriesMenuReducer";
import { menuReducer } from "./menuReducer";


export const rootReducers = combineReducers({
    auth: authReducer,
    orders: ordersReducer,
    ui: uiReducer,
    categories: categoriesReducer,
    categoriesMenu: categoriesMenuReducer,
    products: productsReducer,
    stock: stockReducer,
    menu: menuReducer

});