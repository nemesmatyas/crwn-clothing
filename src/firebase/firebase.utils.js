import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA5SGuiHcyWuA7okjKDEdTGXBV8TfLT7ik",
    authDomain: "crwn-db-83976.firebaseapp.com",
    databaseURL: "https://crwn-db-83976.firebaseio.com",
    projectId: "crwn-db-83976",
    storageBucket: "crwn-db-83976.appspot.com",
    messagingSenderId: "45227216184",
    appId: "1:45227216184:web:402366b61dfcad87b1c5cd"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;