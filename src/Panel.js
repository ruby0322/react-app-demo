import './Panel.css'
import Hint from './Hint'
import React, { useEffect, useState } from 'react';
import { clear } from '@testing-library/user-event/dist/clear';

const PROFILE_IAMGE_URL1 = 'https://media.discordapp.net/attachments/893439505988743178/1006500014933155840/IMG_8581-removebg-preview.png';
const PROFILE_IAMGE_URL2 = 'https://media.discordapp.net/attachments/893439505988743178/1006501183462064209/E29BBEC2-038E-4C8D-8ED6-4201DFA43A85-removebg-preview.png';
const PROFILE_IAMGE_URL3 = 'https://media.discordapp.net/attachments/893439505988743178/1006503247349043230/08A95E27-9391-49C9-9079-227A4E16B7E5.JPG?width=801&height=1001';

const Panel = props => {
    const [liked, setLiked] = useState(false);
    const [likeCnt, setLikeCnt] = useState(0);
    const like = () => {
        setLikeCnt(likeCnt+(liked?-1:1));
        setLiked(!liked);
    };
    useEffect(() => {
        if (likeCnt < 86) {
            let incrementLike = setInterval(() => {
                setLikeCnt(likeCnt+1);
            }, 50);
            return () => clearInterval(incrementLike);
        }
    }, [likeCnt]);
    return (
        <div className='panel shadow hover-scale' style={{
            height: props.h || 'fit-content', 
            width: props.w || 'fit-content', 
            backgroundColor: props.bg
        }}>
            <div className='avatar' style={{backgroundColor: props.avbg, backgroundImage: `url(${PROFILE_IAMGE_URL3})`, backgroundPositionY: '-8px', backgroundSize: 'cover'}}>
                <Hint text='James Ku' w='100%' h='100%'/>
            </div>
            <div class="content">
                <p className="title" style={{color: props.titleColor}}>
                    {props.title}
                </p>
                <p className="body" style={{color: props.bodyColor}}>
                    {props.body}
                </p>
                <p className="sign" 
                    style={{color: '#ff8080'}}
                    onClick={like} 
                >
                    {liked ? '♥' : '♡'} {likeCnt}
                </p>
            </div>
        </div>
    );
};

export default Panel;