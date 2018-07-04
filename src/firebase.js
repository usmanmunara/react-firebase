import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyB3Uj3gA2r3xlwMYj-csJioOQopL0fPH8Y',
  authDomain: 'first-flight-787fd.firebaseapp.com',
  databaseURL: 'https://first-flight-787fd.firebaseio.com',
  projectId: 'first-flight-787fd',
  storageBucket: 'first-flight-787fd.appspot.com',
  messagingSenderId: '381130432711'
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
