import { LOGIN, LOGOUT, LOGIN_ERROR } from '../actions/types'

const initialState = {

    //TODO Change this to false
    isLoggedIn: true,
    loggedInError: false
};

export default function (state = initialState, action) {

    switch ( action.type ) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            };
        case LOGIN_ERROR:
            return {
                ...state,
                loggedInError: action.error
            };
        default:
            return state;
    }
}
