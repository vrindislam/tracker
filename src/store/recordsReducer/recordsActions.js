import {REMOVE_RECORD, SAVE_VALUE} from "../actionTypes";

export const saveInputValue = value => {
    return {type: SAVE_VALUE, payload: value}
}
export const removeRecord = index => {
    console.log(index)
    return {type: REMOVE_RECORD, payload: {index}}
}