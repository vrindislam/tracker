import React, {useState} from 'react';
import './NewRecord.css'
import {runTimer, saveInputValue} from "../../store/appActions";
import {useDispatch} from "react-redux";


const NewRecord = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('')

    const handleSaveInputValue = (event) => {
        event.preventDefault();
        let noInputValue = event.target.input.value;
        if (noInputValue === '') {
            noInputValue = new Date().toLocaleDateString()
        }
        return noInputValue;
    }
    const clearInput = (event) => {
        setInputValue(event.target.input.value = inputValue)
    }

    return (
        <form className='search-container' onSubmit={(event) => {
            dispatch(runTimer())
            dispatch(saveInputValue(handleSaveInputValue(event)))
            clearInput(event)
        }}>
            <input name='input' className='record-field'
                   placeholder='Enter tracker name' type="search"/>
            <button className='submit-btn' type='submit'>submit</button>
        </form>
    );
};

export default NewRecord;