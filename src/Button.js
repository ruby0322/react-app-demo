import './Button.css'
import React, { useEffect, useState, useRef } from 'react';

const Button = props => {
    return (
        <div className='button hover-scale shadow' style={{backgroundColor: props.bg}} onClick={props.onClick}>
            <p>{props.text}</p>
        </div>
    );
};

export default Button;