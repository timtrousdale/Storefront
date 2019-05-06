import { USERNAME, PASSWORD } from '../actions/types'

const initialState = {
    username: '',
    password: ''
};

export default function (state = initialState, action) {

    switch ( action.type ) {

        case USERNAME:
            return {
                ...state,
                username: action.updatedUsername
            };
        case PASSWORD:
            return {
                ...state,
                password: action.updatedPassword
            };
        default:
            return state;
    }
}