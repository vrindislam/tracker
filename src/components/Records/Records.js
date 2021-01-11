import React, {useState, useEffect} from 'react';
import './Records.css'
import {useDispatch, useSelector} from "react-redux";
import RecordTemplate from "./RecordTemplate";
import {removeRecord} from "../../store/recordsReducer/recordsActions";
import {runTimer, stopTimer} from "../../store/timerReducer/timerActions";

const Records = () => {
    const dispatch = useDispatch();
    const listItem = useSelector(state => state.records);
    console.log(listItem)
    const isRunning = useSelector(state => state.timer.isRunning);
    const chosenTrack = useSelector(state => state.timer.timerId);

    const [timer, setTimer] = useState(0);

    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                setTimer(timer => timer + 1)
            }, 1000);
        } else if (!isRunning && timer !== 0) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)

    }, [isRunning, timer]);




    return (
        <section className='record-container'>
            {!!listItem.length ?
                listItem.map((el, index) => (
                    <RecordTemplate
                        style={chosenTrack === index ? 'record-template-chosen' : 'record-template'}
                        name={el}
                        key={index}
                        index={index}
                        timer={chosenTrack===index && timer}
                        actions={<>
                            {chosenTrack === index ?
                                <div className='record-pause'
                                     onClick={() => {
                                         dispatch(stopTimer())
                                     }}>
                                    <i className="far fa-pause-circle"></i></div>
                                : <div className='record-pause'
                                       onClick={() => {

                                           dispatch(runTimer(index));
                                       }}>

                                    <i className="far fa-play-circle"></i></div>}

                            <div className='record-delete'
                                 onClick={() => {
                                     dispatch(removeRecord(index));
                                     setTimer(0)
                                 }}>
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