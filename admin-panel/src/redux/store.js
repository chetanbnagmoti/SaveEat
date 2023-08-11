import thunk from "redux-thunk"
import { applyMiddleware,legacy_createStore,combineReducers,compose } from "redux";
import { authReducer } from "./auth/auth.reducer";
import { orderReducer } from "./order/order.reducer";
import { Menu_orderReducer } from "./Menu/Menu.reducer";

const rootReducer=combineReducers({
    auth:authReducer,
    order:orderReducer,
    menu_order:Menu_orderReducer
   
})
const createComposer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))
