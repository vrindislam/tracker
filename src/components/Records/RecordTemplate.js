import React from 'react';
import {formatTime} from "../../utils/utils";

const RecordTemplate = ({name,actions,timer, style}) => {

    return (
        <div className={style}>
            <div className='record-name'><p># {name}</p></div>
            <div className='record-time'><span>{formatTime(timer)}</span></div>
            {actions}
        </div>
    );
};

export default RecordTemplate;