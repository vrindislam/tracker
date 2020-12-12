import React from 'react';

const RecordTemplate = ({name,actions}) => {
    let date = new Date()
    console.log(date)

    return (
        <div className='record-template'>
            <div className='record-name'><p># {name}</p></div>
            <div className='record-time'><span>00:00:00</span></div>
            {actions}
        </div>
    );
};

export default RecordTemplate;