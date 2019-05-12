import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QUANTITY_OF_CART_ITEM } from './types'

export const add = (item) => dispatch => {
    dispatch({
        type: ADD_TO_CART,
        item: item,
    })
};

export const deleteCartItem = item => dispatch => {
    dispatch({
        type: REMOVE_FROM_CART,
        item: item,
    })
};

export const updateQuantity = (qty, index) => dispatch => {

    dispatch({
        type: CHANGE_QUANTITY_OF_CART_ITEM,
        qty: qty,
        index: index
    })
};
