import {RUN_TIMER, STOP_TIMER} from "../actionTypes";

const initialState = {
    isTimer: false,
    time: 0
}
export const timerReducer = (state = initialState, action) => {
    switch (action.type){
        case RUN_TIMER:
            return {...state, isTimer: true, time: action.payload}
        case STOP_TIMER:
            return {...state, isTimer: initialState}
        default:
            return state
    }
}