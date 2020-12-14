import {combineReducers} from "redux";
import {timerReducer} from "./timerReducer/timerReducer";
import {recordsReducer} from "./recordsReducer/recordsReducer";


export const rootReducer = combineReducers({
    records: recordsReducer,
    timer: timerReducer
})

