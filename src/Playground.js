import './App.css';
import Panel from './Panel'
import Button from './Button'
import React, { useEffect, useState, useRef } from 'react';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
    console.log(response);
}

const Playground = props => {
    return (
        <div>
            <FacebookLogin
                appId="564191048775413"
                autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook}
                cssClass='facebook-login hover-scale'
                icon="fa-facebook" 
            />
        </div>
    );
};

export default Playground;