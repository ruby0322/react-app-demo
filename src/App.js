import './App.css';
import Panel from './Panel'
import Button from './Button'
import React, { useEffect, useState, useRef } from 'react';
import FacebookLogin from '@greatsumini/react-facebook-login';

const PROFILE_IAMGE_URL = 'https://media.discordapp.net/attachments/893439505988743178/1006503247349043230/08A95E27-9391-49C9-9079-227A4E16B7E5.JPG?width=801&height=1001';
const PIG_IMAGE_URL = 'https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1604418323329.jpg';
const GUEST_IMAGE_URL = 'http://n.sinaimg.cn/sinakd10116/300/w1000h900/20200512/978a-itmiwrz3679873.jpg';

class Comment {
  constructor(imgUrl, title, body, likeCnt, bg, avbg, titleColor, bodyColor, name) {
    this.imgUrl = imgUrl;
    this.title = title;
    this.body = body;
    this.likeCnt = likeCnt;
    this.bg = bg;
    this.avbg = avbg;
    this.titleColor = titleColor;
    this.bodyColor = bodyColor;
    this.commentID = -1;
    this.name = name;
    this.timestamp = new Date().toLocaleString();;
  }
};

const FIRST_COMMENT = new Comment(PROFILE_IAMGE_URL, 'POV：你點進來就只為了看我', '哈哈，好笨喔！', 87, 'rgba(28, 32, 46, 0.88)', 'rgba(135,206,235, 0.15)', 'white', '#768CB1', '顧寬証');
const SECOND_COMMENT = new Comment(PROFILE_IAMGE_URL, '不要告我', '好拉對不起，開玩笑的，不要告我拜託', 69, 'rgba(28, 32, 46, 0.88)', 'rgba(135,206,235, 0.15)', 'white', '#768CB1', '顧寬証');
const THIRD_COMMENT =  new Comment(PIG_IMAGE_URL, '嗨，那個長得笨笨的人類！', '對，就是你，新來的，登入 Facebook，說些話吧！', 520, 'rgba(28, 32, 46, 0.88)', 'rgba(135,206,235, 0.15)', 'white', '#768CB1', '可ㄞㄉ小豬');

const App = () => {
  const [comments, setComments] = useState([]);
  let commentsRef = useRef(comments);
  commentsRef.current = comments;
  const [titleInput, setTitleInput] = useState('');
  const [bodyInput, setBodyInput] = useState('');
  const [userData, setUserData] = useState(undefined);
  const getCommentInput = () => new Comment(
    userData.picture.data.url || GUEST_IMAGE_URL, 
    titleInput || '我不會打字', 
    bodyInput || '大家好，我是匿名笨豬，我超笨！', 
    Math.floor(Math.random() * 2000), 
    'rgba(28, 32, 46, 0.88)', 
    'rgba(135,206,235, 0.15)', 
    'white', 
    '#768CB1', 
    userData.name || '匿名笨豬'
  );

  const newComment = comment => {
    comment.commentID = commentsRef.current.length;
    setComments([...commentsRef.current, comment]);
    document.querySelector('#comments').scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  const handleLogin = data => {
    setUserData(data);
    console.log(data);
  };

  useEffect(() => {
    const timer1 = setTimeout(() => {newComment(FIRST_COMMENT)}, 1000);
    const timer2 = setTimeout(() => {newComment(SECOND_COMMENT)}, 2000);
    const timer3 = setTimeout(() => {newComment(THIRD_COMMENT)}, 3000);
    return () => { clearTimeout(timer1); clearTimeout(timer2); clearTimeout(timer3); }
  }, []);

  return (
    <div id='main'>
      <div id='scroll-container'>
        <div id='comments'>
          { comments.map(comment => <Panel {...comment} />) }
        </div>
      </div>
      <p className='neon-text'>
        { userData === undefined ? "Login with Facebook to Comment!" : "" }
      </p>
      <div id='form'>
        <div id='inputs'>
          <input id='titleInput' className='input' placeHolder='標題' onChange={ evt => { setTitleInput(evt.target.value); }}></input>
          <input id='bodyInput' className='input' placeHolder='內文'  onChange={ evt => { setBodyInput(evt.target.value); }}></input>
        </div>
        <Button 
          text='💬'
          bg='rgba(28, 32, 46, 0.88)'
          onClick={() => { if (userData) newComment(getCommentInput()); }}
        />
        { 
          userData === undefined ? 
          <FacebookLogin
            appId="1396364967552687"
            autoLoad={true}
            fields="name,email,picture"
            onProfileSuccess={handleLogin}
            onFail={(error) => {
              console.log('Login Failed!', error);
            }}
            onSuccess={(response) => {
              console.log('Login Success!', response);
            }}
            className='facebook-login hover-scale'
          /> : 
          <></> 
        }
      </div>
    </div>
  );
};

export default App;
