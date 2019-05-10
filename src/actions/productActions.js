import { FETCH_PRODUCTS, FETCH_CATEGORIES, FILTER } from './types'

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


export const filter = filterName => dispatch => {
    dispatch({
        type: FILTER,
        filterName: filterName,
    })
};
export const test = filterName => dispatch => {

};
