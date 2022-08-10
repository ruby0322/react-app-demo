import './Picture.css';
import Hint from './Hint'
import React, { useEffect, useState, useRef } from 'react';

const Picture = props => {
    return (
        <div className='avatar' style={{width: props.size || '5.2rem', height: props.size || '5.2rem', backgroundColor: props.avbg || 'none', backgroundImage: `url(${props.imgUrl})`}}>
            <Hint text={props.name} w='100%' h='100%'/>
        </div>
    );
}

export default Picture;