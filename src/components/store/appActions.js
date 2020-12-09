import {RUN_TIMER, SAVE_VALUE, STOP_TIMER,CHANGE_INPUT_VALUE} from "./actionTypes";

export const runTimer = () =>{

    return {type: RUN_TIMER}
}
export const stopTimer = () =>{
    return {type: STOP_TIMER}
}

export const handleChangeValue = (event) =>{
    return {type: CHANGE_INPUT_VALUE, payload: event}
}

export const saveInputValue = (event) =>{
    event.preventDefault();
    const inputValue = event.target.input.value
    return{type: SAVE_VALUE, payload: inputValue}
}