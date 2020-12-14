import {RUN_TIMER, STOP_TIMER} from "../actionTypes";

export const runTimer = () => {

    return {type: RUN_TIMER}
}
export const stopTimer = () => {
    return {type: STOP_TIMER}
}