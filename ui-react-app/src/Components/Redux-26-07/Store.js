import { combineReducers, legacy_createStore as createStore } from 'redux';
import { CounterReducer, ProductList } from "./CounterReducer";

const mergeRedusers = combineReducers({
    products: ProductList,
    counter: CounterReducer
})

export const Store = createStore(mergeRedusers)