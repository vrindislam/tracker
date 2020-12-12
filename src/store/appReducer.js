import {RUN_TIMER, SAVE_VALUE, STOP_TIMER, REMOVE_RECORD} from "./actionTypes";

const initialState = {
    isTimer: false,
    tracks: [],
}
export const appReducer = (state = initialState, action) => {
    switch (action.type){
        case RUN_TIMER:
            return {...state, isTimer: true}
        case STOP_TIMER:
            return initialState
        case SAVE_VALUE:
            return {...state, tracks: [...state.tracks, action.payload]}
        case REMOVE_RECORD:
            return state.tracks.filter(record => record.index !== action.payload.index);
        default:
            return state
    }
}