import { FETCH_PRODUCTS, FETCH_CATEGORIES } from '../actions/types'

const initialState = {
    productsList: [],
    categories:[],
    // isLoggedIn: false
};

export default function (state = initialState, action) {

    switch ( action.type ) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                productsList: action.updatedProducts
            };
        case FETCH_CATEGORIES:
            return {
                ...state,
                categories: action.updatedCategories
            };
        default:
            return state;
    }
}
