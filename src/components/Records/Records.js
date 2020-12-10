import React from 'react';
import './Records.css'
import {useDispatch, useSelector} from "react-redux";
import RecordTemplate from "./RecordTemplate";

const Records = () => {
    const dispatch = useDispatch();
    const listItem = useSelector(state => {
        return state.inputValue
    })

    const record = listItem.map((el, index) => (
        <RecordTemplate
            name={el}
            key={index}
        />
    ))

    return (
        <section className='record-container'>
            {record}
        </section>
    );
};

export default Records;