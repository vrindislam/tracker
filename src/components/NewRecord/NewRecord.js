import React from 'react';
import './NewRecord.css'
import {runTimer, saveInputValue} from "../store/appActions";
import {useDispatch} from "react-redux";


const NewRecord = () => {
    const dispatch = useDispatch()
    const handleSaveInputValue = (event) => {
        event.preventDefault();
        return event.target.input.value;
    }

    return (
        <form className='search-container' onSubmit={(event) => {
            dispatch(runTimer())
            dispatch(saveInputValue(handleSaveInputValue(event)))
        }}>
            <input name='input' className='record-field'
                   placeholder='Enter tracker name' type="search"/>
            <button className='submit-btn' type='submit'>submit</button>
        </form>
    );
};

export default NewRecord;