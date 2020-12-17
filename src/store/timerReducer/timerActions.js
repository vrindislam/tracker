import {RUN_TIMER, STOP_TIMER} from "../actionTypes";

export const runTimer = (timerId) => {

    return {type: RUN_TIMER, payload: {timerId}}
}
export const stopTimer = () => {
    return {type: STOP_TIMER}
}