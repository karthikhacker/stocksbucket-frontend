import React from 'react'
import pulse from '../icons/pulse.svg';

const Loading = () => {
    return (
        <div className="spinner">
            <img src={pulse} className="loading-icon" alt="spinner" />
        </div>
    )
}

export default Loading
