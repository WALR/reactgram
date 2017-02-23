import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';
import './index.css';

firebase.initializeApp({
    apiKey: "AIzaSyBPpmb2UnUXTQ_rP3ku0vF425m_zAnc4Tc",
    authDomain: "reactgram.firebaseapp.com",
    databaseURL: "https://reactgram.firebaseio.com",
    storageBucket: "reactgram.appspot.com",
    messagingSenderId: "757529117448"
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
