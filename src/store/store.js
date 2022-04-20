import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { rootReducers } from "../reducers/rootReducer";
//TODO: QUITAR ESTA LINEA
const composeEnhancers = compose;

export const store = createStore(
    rootReducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
)

