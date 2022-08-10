import './Panel.css'
import Picture from './Picture'
import React, { useEffect, useState } from 'react';

const Panel = props => {
    const [liked, setLiked] = useState(false);
    const [likeCnt, setLikeCnt] = useState(0);
    const like = () => {
        setLikeCnt(likeCnt+(liked?-1:1));
        setLiked(!liked);
    };
    useEffect(() => {
        if (likeCnt < props.likeCnt) {
            let incrementLike = setInterval(() => {
                setLikeCnt(likeCnt+1);
            }, 20);
            return () => clearInterval(incrementLike);
        }
    }, [likeCnt]);
    return (
        <div className='panel shadow hover-scale' style={{
            height: props.h || 'fit-content', 
            width: props.w || 'fit-content', 
            backgroundColor: props.bg
        }}>
            <div className='wrapper'>
                <div className='profile-pic'>
                    <Picture  {...props} />
                </div>
                <div class="content">
                    <p className="title" style={{color: props.titleColor}}>
                        {props.title}
                    </p>
                    <p className="body" style={{color: props.bodyColor}}>
                        {props.body}
                    </p>
                    <div className='footer'>
                        <p className='comment-id'>
                            #{props.commentID}
                        </p>
                        <p className='timestamp'>
                            {props.timestamp}
                        </p>
                        <p className="sign" 
                            style={{color: '#ff8080'}}
                            onClick={like} 
                            >
                            {liked ? '♥' : '♡'} {likeCnt}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Panel;