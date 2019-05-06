import { START_LOADING, STOP_LOADING } from '../actions/types'

const initialState = {
    isLoading: false
};

export default function (state = initialState, action) {

    switch ( action.type ) {

        case START_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case STOP_LOADING:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    }
}