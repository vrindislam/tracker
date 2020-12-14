import React from 'react';
import './Records.css'
import {useDispatch, useSelector} from "react-redux";
import RecordTemplate from "./RecordTemplate";
import {removeRecord} from "../../store/recordsReducer/recordsActions";

const Records = () => {
    const dispatch = useDispatch();
    const listItem = useSelector(state => {
        return state.records
    })


    return (
        <section className='record-container'>
            {!!listItem.length ?
                listItem.map((el, index) => (
                    <RecordTemplate
                        name={el}
                        key={index}
                        index={index}
                        actions={<>
                            <div className='record-pause'><i className="far fa-pause-circle"></i></div>
                            <div className='record-delete'
                                 onClick={() => dispatch(removeRecord(el))}>
                                <i className="far fa-trash-alt"></i>
                            </div>
                        </>}

                    />
                ))
                : <p>add a track,pls</p>}
        </section>
    );
};

export default Records;