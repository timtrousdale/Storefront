import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QUANTITY_OF_CART_ITEM } from '../actions/types'

const initialState = {
    cart: []
};

export default function (state = initialState, action) {

    switch ( action.type ) {

        case ADD_TO_CART: {
            return {
                ...state,
                cart: [...state.cart, action.item]
            };
        }
        case REMOVE_FROM_CART: {

            return {
                ...state,
                cart: state.cart.filter(item => action.item !== item),
            };
        }
        case CHANGE_QUANTITY_OF_CART_ITEM: {
            let newCart = state.cart;
            newCart[action.index].quantity = action.qty;
            return {
                ...state,
                cart: newCart
            };
        }
        default:
            return state;
    }
}