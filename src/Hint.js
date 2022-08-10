import './Hint.css'
import React, { useEffect, useState, useRef } from 'react';

const Hint = props => {
    return (
        <div className='hint' style={{width: props.w, height: props.h}}>
            <p>
                {props.text}
            </p>
        </div>
    );
};

export default Hint;