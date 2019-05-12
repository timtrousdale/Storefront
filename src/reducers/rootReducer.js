import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import productReducer from './productsReducer'
import loaderReducer from './loaderReducer'
import statesReducer from './statesReducer'
import cartReducer from './cartReducer'

export default combineReducers({
    login: loginReducer,
    products: productReducer,
    loader: loaderReducer,
    states: statesReducer,
    cart: cartReducer
});