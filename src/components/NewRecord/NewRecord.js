import React from 'react';
import './NewRecord.css'
import {runTimer, handleChangeValue,saveInputValue} from "../store/appActions";
import {useDispatch} from "react-redux";


const NewRecord = () => {
    const dispatch = useDispatch()
    return (
        <form className='search-container' onSubmit={(event) => {
            dispatch(runTimer())
            dispatch(saveInputValue(event))
        }}>
            <input name='input' onChange={(event) => dispatch(handleChangeValue(event.target.value))} className='record-field'
                   placeholder='Enter tracker name' type="search"/>
            <button className='submit-btn'  type='submit'>submit</button>
        </form>
    );
};

export default NewRecord;