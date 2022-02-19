import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { ordersReducer } from "./ordersReducer";

export const rootReducers = combineReducers({
    auth: authReducer,
    orders: ordersReducer,
})