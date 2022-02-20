import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { ordersReducer } from "./ordersReducer";
import { uiReducer } from "./uiReducer";

export const rootReducers = combineReducers({
    auth: authReducer,
    orders: ordersReducer,
    ui: uiReducer,
})