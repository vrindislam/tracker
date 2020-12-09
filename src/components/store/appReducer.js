import {RUN_TIMER, SAVE_VALUE, STOP_TIMER,CHANGE_INPUT_VALUE} from "./actionTypes";

const initialState = {
    isTimer: false,
    inputValue: [],
    changeValue: ''
}
export const appReducer = (state = initialState, action) => {
    switch (action.type){
        case RUN_TIMER:
            return {...state, isTimer: true}
        case STOP_TIMER:
            return initialState
        case CHANGE_INPUT_VALUE:
            return {...state, changeValue: action.payload}
        case SAVE_VALUE:
            return {...state, inputValue: [action.payload]}
        default:
            return state
    }
}