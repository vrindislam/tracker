import React from 'react';

const RecordTemplate = ({name}) => {
    return (
        <div className='record-template'>
            <div className='record-name'><p>#{name}</p></div>
            <div className='record-time'><span>00:00:00</span></div>
            <div className='record-pause'><i className="far fa-pause-circle"></i></div>
            <div className='record-delete'><i className="far fa-trash-alt"></i></div>
        </div>
    );
};

export default RecordTemplate;