import React from 'react';

export const SecondsCounter = ({ units, tens, hundreds, thousands, tenThousands, hundredThousands }) => {
    return (
        <div className="d-flex justify-content-center">
            <div className="d-flex">

                <div className="digit box">{hundredThousands}</div>
                <div className="digit box">{tenThousands}</div>
                <div className="digit box">{thousands}</div>
                <div className="digit box">{hundreds}</div>
                <div className="digit box">{tens}</div>
                <div className="digit box">{units}</div>
            </div>
        </div>
    );
};





