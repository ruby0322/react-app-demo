import './App.css';
import Panel from './Panel'
import Button from './Button'
import React, { useEffect, useState } from 'react';

const PROFILE_IAMGE_URL = 'https://media.discordapp.net/attachments/893439505988743178/1006503247349043230/08A95E27-9391-49C9-9079-227A4E16B7E5.JPG?width=801&height=1001';
const PIG_IMAGE_URL = 'https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1644655550962.jpg';

class Comment {
  constructor(imgUrl, title, body, likeCnt, bg, avbg, titleColor, bodyColor, commentID, name) {
    this.imgUrl = imgUrl;
    this.title = title;
    this.body = body;
    this.likeCnt = likeCnt;
    this.bg = bg;
    this.avbg = avbg;
    this.titleColor = titleColor;
    this.bodyColor = bodyColor;
    this.commentID = commentID;
    this.name = name;
    const current = new Date();
    this.timestamp = current.toLocaleString();;
  }
};

const FIRST_COMMENT = new Comment(PROFILE_IAMGE_URL, 'POV：你點進來就只為了看我', '哈哈，好笨喔！對不起不要告我', 86, 'rgba(28, 32, 46, 0.88)', 'rgba(135,206,235, 0.15)', 'white', '#768CB1', 0, '顧寬証');

const App = () => {
  const [comments, setComments] = useState([FIRST_COMMENT]);
  const [titleInput, setTitleInput] = useState('');
  const [bodyInput, setBodyInput] = useState('');
  const [urlInput, setUrlInput] = useState('http://n.sinaimg.cn/sinakd10116/300/w1000h900/20200512/978a-itmiwrz3679873.jpg');
  const newComment = () => {
    setComments([...comments, 
      new Comment(
        urlInput || PIG_IMAGE_URL, 
        titleInput || '我不會打字', 
        bodyInput || '大家好，我是匿名笨豬，我超笨！', 
        Math.floor(Math.random() * 2000), 
        'rgba(28, 32, 46, 0.88)', 
        'rgba(135,206,235, 0.15)', 
        'white', 
        '#768CB1', 
        comments.length, 
        '匿名笨豬'
      )
    ]);
  };
  return (
    <div id='main'>
      <div id='scroll-container'>
        <div id='comments'>
          { comments.map(comment => <Panel {...comment} />) }
        </div>
      </div>
      <div id='form'>
        <div id='inputs'>
          <input id='titleInput' className='input' placeHolder='標題' onChange={ evt => { setTitleInput(evt.target.value); }}></input>
          <input id='bodyInput' className='input' placeHolder='內文'  onChange={ evt => { setBodyInput(evt.target.value); }}></input>
          <input id='urlInput' className='input' placeHolder='頭貼超連結'  onChange={ evt => { setUrlInput(evt.target.value); }}></input>
        </div>
        <Button 
          text='+'
          bg='rgba(28, 32, 46, 0.88)'
          onClick={newComment}
        />
      </div>
    </div>
  );
};

export default App;
