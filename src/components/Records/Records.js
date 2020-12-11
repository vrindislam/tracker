import React from 'react';
import './Records.css'
import {useDispatch, useSelector} from "react-redux";
import RecordTemplate from "./RecordTemplate";
import {removeRecord} from "../../store/appActions";

const Records = () => {
    const dispatch = useDispatch();
    const listItem = useSelector(state => {
        return state.inputValue.reverse()
    })
    const listLength = useSelector(state => {return state.inputValue})
    console.log(listLength)



    return (
        <section className='record-container'>
            {!!listLength.length ?  listItem.map((el, index) => (
            <RecordTemplate
                name={el}
                key={index}
                index={el.index}
                deleteRecord={() => dispatch(removeRecord(el.index))}
            />
            )): <p>add a track,pls</p>}
        </section>
    );
};

export default Records;