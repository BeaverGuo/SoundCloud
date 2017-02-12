import Immutable,{ fromJS } from 'immutable';
import * as actionTypes from '../constants/actionTypes.js';
const initialState = Immutable.Map({ tracks:[] });

const tracksReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TRACKS_SET:
            return setTracks(state, action);
    }
    return state;
}

function setTracks(state, action) {
    const  { tracks } = action;
    return state.set('tracks', tracks);
}

export default tracksReducer;
