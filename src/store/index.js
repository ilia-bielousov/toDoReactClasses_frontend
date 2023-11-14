import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { clientReducer } from "./clientReducer";

const rootReducer = combineReducers({
  client: clientReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));