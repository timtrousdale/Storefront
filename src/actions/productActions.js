import { FETCH_PRODUCTS, FETCH_CATEGORIES } from './types'

export const fetchProducts = () => dispatch => {
    fetch('https://my-json-server.typicode.com/tdmichaelis/json-api/products')
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: FETCH_PRODUCTS,
                updatedProducts: data
            })
        })
};

export const fetchCategories = () => dispatch => {
    fetch('https://my-json-server.typicode.com/tdmichaelis/typicode/categories')
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: FETCH_CATEGORIES,
                updatedCategories: data
            })
        })
};
export const test = () => (dispatch) => {
    console.log('test')
};