import {RUN_TIMER, STOP_TIMER} from "../actionTypes";

const initialState = {
    isRunning: false,
    timerId: null,
    startDate: null,
}
export const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case RUN_TIMER:
            return {
                ...state,
                isRunning: true,
                startDate: +new Date(),
                timerId: action.payload.timerId
            }
        case STOP_TIMER:
            return {
                ...state,
                isRunning: !state,
                startDate: null,
                timerId: null
            }
        default:
            return state
    }
}