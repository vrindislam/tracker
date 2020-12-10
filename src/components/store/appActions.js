import {RUN_TIMER, SAVE_VALUE, STOP_TIMER} from "./actionTypes";

export const runTimer = () => {

    return {type: RUN_TIMER}
}
export const stopTimer = () => {
    return {type: STOP_TIMER}
}
export const saveInputValue = (value) => {
    return {type: SAVE_VALUE, payload: value}
}