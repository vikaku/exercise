import React from 'react';

import './ProgressBar.css';

export const ProgressBar = () => {
    return (
        <>
            <div className="wrapper">
                        <div className="margin-area">
                            <div className="dot one">1</div>
                            <div className="dot two">2</div>
                            <div className="dot three">3</div>
                            
                            <div className="progress-bar first"></div>
                            <div className="progress-bar second"></div>
                            <div className="message message-1">  Picked up </div>
                            <div className="message message-2">Arrived at USPS facility</div>
                            <div className="message message-3">Out for delivery</div>
                        </div>
          </div>

        </>
    )
}
