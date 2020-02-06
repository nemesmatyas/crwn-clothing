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

  // Use the userAuth object stored in the Firebase Auth module to store user in database
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
      return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (err) {
        console.log('Error creating user!', err.message);
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;