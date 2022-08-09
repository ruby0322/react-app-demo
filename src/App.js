import './App.css';
import Panel from './Panel'
import Button from './Button'
import React, { useEffect, useState } from 'react';

const PROFILE_IAMGE_URL = 'https://media.discordapp.net/attachments/893439505988743178/1006503247349043230/08A95E27-9391-49C9-9079-227A4E16B7E5.JPG?width=801&height=1001';

class Comment {
  constructor(imgUrl, title, body, likeCnt, bg, avbg, titleColor, bodyColor) {
    this.imgUrl = imgUrl;
    this.title = title;
    this.body = body;
    this.likeCnt = likeCnt;
    this.bg = bg;
    this.avbg = avbg;
    this.titleColor = titleColor;
    this.bodyColor = bodyColor;
  }
};

const FIRST_COMMENT = new Comment(PROFILE_IAMGE_URL, 'POV：你點進來就只為了看我', '哈哈，好笨喔！對不起不要告我', 0, 'rgba(28, 32, 46, 0.88)', 'rgba(135,206,235, 0.15)', 'white', '#768CB1');

const App = () => {
  const [comments, setComments] = useState([FIRST_COMMENT]);
  return (
    <div id="main">
      { comments.map(comment => <Panel {...comment} />) }
      <Button 
        text='+'
        bg='rgba(28, 32, 46, 0.88)'
        onClick={() => {setComments([...comments, FIRST_COMMENT])}}
      />
    </div>
  );
};

export default App;
