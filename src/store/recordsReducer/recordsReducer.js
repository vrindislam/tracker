import {SAVE_VALUE, REMOVE_RECORD} from "../actionTypes";

const initialState = [];
export const recordsReducer = (state = initialState, action) => {
    switch (action.type){
        case SAVE_VALUE:
            return [...state, action.payload]
        case REMOVE_RECORD:
            return  [...state.filter((e, index) => index !== action.payload.index)]
        default:
            return state
    }
}