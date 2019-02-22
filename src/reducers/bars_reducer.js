import { FETCH_BARS } from '../actions/index';

export default function(state = [], action) {
    switch(action.type){
        case FETCH_BARS:
            return [ action.payload.data, ...state ]
    }
    return state;
}