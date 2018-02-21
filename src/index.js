import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';




var config = {
  apiKey: "AIzaSyBWS_U-rW3Fq9qTOGOgjMtaxCwun3jGbNg",
  authDomain: "react-firebase-c420b.firebaseapp.com",
  databaseURL: "https://react-firebase-c420b.firebaseio.com",
  projectId: "react-firebase-c420b",
  storageBucket: "react-firebase-c420b.appspot.com",
  messagingSenderId: "772855940897"
};
firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
