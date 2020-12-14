import {RUN_TIMER, STOP_TIMER} from "../actionTypes";

const initialState = true
export const timerReducer = (state = initialState, action) => {
    switch (action.type){
        case RUN_TIMER:
            return {...state, isTimer: true}
        case STOP_TIMER:
            return initialState
        default:
            return state
    }
}