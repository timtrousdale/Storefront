import { USERNAME, PASSWORD, LOGIN, START_LOADING, STOP_LOADING, LOGIN_ERROR } from './types'

export const logIN = (post, redirect) => dispatch => {

    dispatch({ type: START_LOADING });
    setTimeout(function () {
        if ( post.username === 'admin' && post.password === 'password' ) {

            //TODO Make a loading overlay
            //TODO If password matched then hide overlay and make real API call to products
            dispatch({
                type: LOGIN
            });
            redirect.push('/products');
        } else {
            //TODO If password DIDN'T match hide overlay and display error
            dispatch({type: LOGIN_ERROR, error: true});
        }



        dispatch({ type: STOP_LOADING });


    }, 1500);

};

export const changeUsername = username => dispatch => {
    dispatch({
        type: USERNAME,
        updatedUsername: username,
    })
};

export const changePassword = password => ({
    type: PASSWORD,
    updatedPassword: password
});