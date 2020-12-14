import React from 'react';

const RecordTemplate = ({name,actions}) => {

    return (
        <div className='record-template'>
            <div className='record-name'><p># {name}</p></div>
            <div className='record-time'><span>00:00:00</span></div>
            {actions}
        </div>
    );
};

export default RecordTemplate;