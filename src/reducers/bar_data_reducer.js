import { FETCH_BAR_DATA } from '../actions/index';

export default function(state = [], action) {
    switch(action.type){
        case FETCH_BAR_DATA:
            return [ action.payload, ...state ]
    }
    return state;
}