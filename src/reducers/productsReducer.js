import { FETCH_PRODUCTS, FETCH_CATEGORIES, FILTER } from '../actions/types'

const initialState = {
    productsList: [],
    categories:[],
    filter: 'none'
};

export default function (state = initialState, action) {

    switch ( action.type ) {
        case FILTER:
            return {
                ...state,
                filter: action.filterName
            };

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
