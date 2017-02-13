import SC from 'soundcloud';
import * as actionTypes from '../constants/actionTypes';

function setMe(user) {
    return {
        type: actionTypes.ME_SET,
        user
    };
}

//connect to the SoundCloud API, 
//login with our credentials and see our account details in 
//the console output.

//thunk middleware requires us to return a function instead of an object.
//The function gives us access to the dispatch functionality of the store.
export function auth() {
    return function (dispatch) {
        SC.connect().then((session) => {
            dispatch(fetchMe(session));
        });
    };
};

function fetchMe(session) {
    return function (dispatch) {
        fetch(`//api.soundcloud.com/me?oauth_token=${session.oauth_token}`)
            .then((response) => response.json())
            .then((data) => {
                dispatch(setMe(data));
            });
    };
}