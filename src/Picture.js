import './Picture.css';
import Hint from './Hint'
import React, { useEffect, useState, useRef } from 'react';

const Picture = props => {
    return (
        <div className='avatar' style={{backgroundColor: props.avbg, backgroundImage: `url(${props.imgUrl})`, backgroundSize: 'cover'}}>
            <Hint text={props.name} w='100%' h='100%'/>
        </div>
    );
}

export default Picture;