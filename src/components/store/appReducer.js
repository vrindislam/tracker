import {RUN_TIMER, SAVE_VALUE, STOP_TIMER} from "./actionTypes";

const initialState = {
    isTimer: false,
    inputValue: [],
}
export const appReducer = (state = initialState, action) => {
    switch (action.type){
        case RUN_TIMER:
            return {...state, isTimer: true}
        case STOP_TIMER:
            return initialState
        case SAVE_VALUE:
            return {...state, inputValue: [...state.inputValue, action.payload]}
        default:
            return state
    }
}